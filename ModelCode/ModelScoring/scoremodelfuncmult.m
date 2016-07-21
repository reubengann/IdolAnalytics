% Scoring the model
% This returns the number of misses for a given set of coefficients. We start with
% a simple fit (in R) which gives us some base coefficients to work with. Then we 
% adjust rates of decay (rates) and overal rate of importance (bumps). We calculate
% the probability and then check whether the most probable not-safe performances were
% in fact ranked in the bottom N. The number of total misses is tabulated on this basis.
% Also returns the rate of missing and the rate of misses per episode.

function score = scoremodelfuncmult(data,rates,bumps)
    
	%Initialize	
	time=data(:,1);
    W=data(:,2);
    D=data(:,3);
    V=data(:,5);
    Result=data(:,4);
    W2=(W*bumps(1)).*Scalingfunction(-rates(1),time);
    D2=(D*bumps(2)).*Scalingfunction(rates(2),time);
    V2=(V*bumps(3)).*Scalingfunction(-rates(3),time);
    
	%Base coefficients come from a logit fit in R
	logit = -1.448111 + 0.016719*W2 + 0.008822*D2 + 0.018044*V2;
    p=1./(1+exp(logit));
	
	%Search for the limits of the episodes
    stopindex = [diff(time) ; 1];
    stopindex(stopindex < 0) = 1;
    stopindex(stopindex > 1) = 1;
    stopindex = stopindex.*(1:length(data))';
    stopindex = stopindex(stopindex~=0);
    startindex = [1 ; stopindex(1:end-1)+1];
	
	%Initialize counters
    nummisses = 0;
    totalmiss = 0;
    episodes = 0;
    flawless = 0;
    elimcorrect = 0;
    falsepositives = 0;
    falsenegatives = 0;
	
	% We scan through each episode, sort for each episode, which gives us a ranking
	% We calculate how many bottom N there were, and determine which performances
	% were correctly ranked.
    for i = 1:length(startindex)
        sti = startindex(i);
        spi = stopindex(i);
        p(sti:spi) = p(sti:spi)/sum(p(sti:spi));
        M = [Result(sti:spi) p(sti:spi) (1:(spi-sti)+1)'];     
        M = sortrows(M,-2);
        targets = sum(M(:,1));
        miss = (M(:,1)==0 & (1:size(M,1))' <= targets) ...
            | (M(:,1)==1 & (1:size(M,1))' > targets);
        M(:,4) = miss;
        if(targets~=0)
            M(:,5) = (M(:,2)-M(targets,2)).*miss;
        else
			% At least once, nobody was eliminated. That is a non-result that should
			% not be counted. If the data wasn't properly sanitized, throw an error
            fprintf('Warning: there is a no-elim round.\n');
            M(:,5) = 0;
        end
        M = sortrows(M,3);
        nummisses = nummisses + sum(M(:,4));
        totalmiss = totalmiss + sum(abs(M(:,5)));
        episodes = episodes + 1;
        if(sum(M(:,4)) == 0)
            flawless=flawless+1;
        end
        elimcorrect = elimcorrect + sum(M(:,1) & ~M(:,4));
        falsepositives = falsepositives + sum(~M(:,1) & M(:,4));
        falsenegatives = falsenegatives + sum(M(:,1) & M(:,4)) ;
    end
    score = [nummisses totalmiss/nummisses nummisses/episodes];
end