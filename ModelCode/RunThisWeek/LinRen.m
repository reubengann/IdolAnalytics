% Linear renormalize
function y=LinRen(x,ymax)
m = ymax/(max(x) - sum(x)/length(x));
b = -m*sum(x)/length(x);
y = m*x+b;
end