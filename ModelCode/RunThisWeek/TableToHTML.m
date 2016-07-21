%Generate an HTML table from the model predictions

function TableToHTML(M)
bottomgroup = 1; %3 if bottom 3, 2 if bottom 2
cutoffline = (M{bottomgroup+1,6}+M{bottomgroup+2,6})/2; %halfway in between the 3rd and 4th person
s = '';
flag=0;
s=[s sprintf('<table id="finalprediction" class="responsive-table">\n')];
s = [s '<thead><tr>']; %Header row
for i=1:6
    s = [s '<th>' M{1,i} '</th>'];    
end
s = [s sprintf('</tr></thead>\n')];
s = [s sprintf('<tbody>')];
for i=2:size(M,1) %data rows    
    pval = M{i,6}; %Not-safe probability
    
    if(pval - cutoffline > .03) %notsafe
        s = [s '<tr class="notsafe">'];
    elseif(pval - cutoffline < -.03)  %safe
        s = [s '<tr class="safe">'];
    else %no call, yellow
        s = [s '<tr class="unsure">'];
    end
    for j=1:6
        s = [s '<td>'];
        if(j==1)
            s = [s '<a href="' M{i,7} '">' M{i,j} '</a>']; %contestant
        elseif(j==2)
            if(sum(M{i,j}=='/'))
                [a b c] = strread(M{i,j}, '%s%s%s', 'delimiter','/');
                a = a{1}; b = b{1}; c = c{1};
                if(isstr(M{i,8}))
                    s = [s '<a href="' M{i,8} '">' a '</a>'];
                else
                    s = [s a];
                end
                s = [s ' / '];
                if(isstr(M{i,9}))
                    s = [s '<a href="' M{i,9} '">' b '</a>'];
                else
                    s = [s b];
                end
                s = [s ' / '];
                if(isstr(M{i,10}))
                    s = [s '<a href="' M{i,10} '">' c '</a>'];
                else
                    s = [s c];
                end
            else
                if(isstr(M{i,8}))
                    s = [s '<a href="' M{i,8} '">' M{i,j} '</a>'];
                else
                    s = [s M{i,j}];
                end
            end
        else
            if(isstr(M{i,j}))
                s = [s M{i,j}];
            else
                if mod(M{i,j},1)==0
                    s = [s sprintf('%i',M{i,j})];
                else
                    if(j==4)
                        s = [s sprintf('%0.1f',M{i,j})];
                    else
                        s = [s sprintf('%0.3f',M{i,j})];            
                    end
                end
            end
        end
        s = [s '</td>'];
    end
    s = [s sprintf('</tr>\n')];
end
s = [s '</tbody></table>'];
clipboard('copy',s);
disp 'Copied to clipboard';