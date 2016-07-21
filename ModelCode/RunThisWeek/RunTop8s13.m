%%Quick and dirty model prediction for IdolAnalytics projection
% Data are entered into Excel spreadsheet on the night of the show
% The model coefficients are all determined beforehand, so there's
% no BS going on. Just plug and chug.


[data,TXT,RAW]=xlsread('S13Top8Redux.xlsx');

WNTSRaw=cell2mat(RAW(2:end,3));
W = LinRen(WNTSRaw,100);
DIRaw=cell2mat(RAW(2:end,4));
VFRaw=cell2mat(RAW(2:end,5));
V = LinRen(VFRaw,100);

rates = [0.153 0.058 0.108];
bumps = [0.246 0.372 1];
time=6;

W2=(W*bumps(1)).*Scalingfunction(-rates(1),time);
V2=(V*bumps(3)).*Scalingfunction(-rates(3),time);
logit = 1.139397 + 0.005641*W2 + 0.013761*V2;
p=1./(1+exp(logit));
p = p*3/sum(p); %normalize to 3, since 3 people will be in the bottom 3.
while(sum(p>0.99)~=0) %if any is greater than 99% (hey, nobody's that sure of anything)
        p(p>0.99) = p(p>0.99)-.01; %lower only its probability
        p = p*3/sum(p); %normalize
end
RAW{1,6} = 'Not-safe Probability';
for i=2:9
    RAW{i,6}=p(i-1);
end
comp = [RAW(1,:) ; sortrows(RAW(2:end,:),-6)];