% This function iteratively determines the coefficients for the model. It makes use of the scoremodelfuncmult function and tries to minimize the number of misses (classifying somebody safe when they were actually bottom 3, or bottom 3 if they were actually safe)

[data,TXT,RAW]=xlsread('Performances.xlsx');


%starting point
rates = [0.558 0.157 0.077];
bumps = [.566 1.064 1];

scan = 0:0.001:1.0;
scores = zeros(length(scan),4);
for i=1:length(scan)
    score = scoremodelfuncmult(data,...
        [rates(1) rates(2) rates(3)],...
        [bumps(1) bumps(2) bumps(3)]);
    scores(i,1) = scan(i);
    scores(i,2:4) = score(1:3);
end
scores(scores(:,4)==min(scores(:,4)),:)