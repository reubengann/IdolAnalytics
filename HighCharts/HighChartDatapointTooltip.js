// Top 3 Tracker code. Shows filled circles as data points and a logistic regression. Hovering over a data point displays the name of the person whom that data point is associated with.

var series1 = [[0.036,1.050],[0.049,1.065],[0.056,0.940],[0.057,1.066],[0.063,0.021],[0.065,-0.064],[0.071,0.965],[0.073,0.008],[0.080,1.073],[0.085,0.074],[0.089,0.945],[0.095,0.075],[0.104,1.073],[0.107,0.998],[0.112,1.048],[0.118,-0.057],[0.130,0.987],[0.141,0.067],[0.143,0.047],[0.144,0.074],[0.147,0.025],[0.153,-0.074],[0.154,0.056],[0.157,0.069],[0.157,0.029],[0.158,1.041],[0.174,1.039],[0.174,-0.017],[0.183,1.025],[0.190,-0.053],[0.190,0.033],[0.194,-0.075],[0.212,0.964],[0.217,-0.073],[0.225,-0.064],[0.233,1.052],[0.240,0.031],[0.242,0.971],[0.242,0.072],[0.246,-0.074],[0.249,-0.010],[0.262,0.981],[0.263,1.042],[0.277,0.047],[0.279,-0.050],[0.279,-0.002],[0.280,-0.009],[0.287,0.023],[0.288,0.033],[0.290,0.041],[0.291,-0.036],[0.293,0.029],[0.293,0.025],[0.295,-0.054],[0.299,-0.061],[0.301,-0.000],[0.303,0.074],[0.305,-0.026],[0.311,0.014],[0.313,-0.044],[0.316,0.040],[0.317,-0.039],[0.323,0.001],[0.326,0.032],[0.336,0.063],[0.364,0.073],[0.364,0.008],[0.366,-0.058],[0.373,0.944],[0.388,-0.039],[0.397,0.055],[0.400,-0.039],[0.404,1.050],[0.404,-0.041],[0.410,0.069],[0.414,-0.024]];
var series2 = [[0.000,0.722],[0.010,0.703],[0.020,0.683],[0.030,0.663],[0.040,0.642],[0.050,0.620],[0.060,0.598],[0.070,0.575],[0.080,0.553],[0.090,0.530],[0.100,0.507],[0.110,0.483],[0.120,0.460],[0.130,0.437],[0.140,0.415],[0.150,0.392],[0.160,0.371],[0.170,0.349],[0.180,0.329],[0.190,0.308],[0.200,0.289],[0.210,0.270],[0.220,0.252],[0.230,0.235],[0.240,0.219],[0.250,0.204],[0.260,0.189],[0.270,0.175],[0.280,0.162],[0.290,0.150],[0.300,0.139],[0.310,0.128],[0.320,0.118],[0.330,0.109],[0.340,0.100],[0.350,0.092],[0.360,0.085],[0.370,0.078],[0.380,0.071],[0.390,0.065],[0.400,0.060],[0.410,0.055],[0.420,0.050],[0.430,0.046],[0.440,0.042],[0.450,0.039],[0.460,0.035],[0.470,0.032],[0.480,0.029],[0.490,0.027],[0.500,0.025]];
var peepsT3TR22014 = new Array();
peepsT3TR22014[0]="Adam Lambert";
peepsT3TR22014[1]="Danny Gokey";
peepsT3TR22014[2]="Taylor Hicks";
peepsT3TR22014[3]="Melinda Doolittle";
peepsT3TR22014[4]="Siobhan Magnus";
peepsT3TR22014[5]="Chris Daughtry";
peepsT3TR22014[6]="David Archuleta";
peepsT3TR22014[7]="Brooke White";
peepsT3TR22014[8]="Scotty McCreery";
peepsT3TR22014[9]="Thia Megia";
peepsT3TR22014[10]="Jessica Sanchez";
peepsT3TR22014[11]="Pia Toscano";
peepsT3TR22014[12]="Crystal Bowersox";
peepsT3TR22014[13]="Joshua Ledet";
peepsT3TR22014[14]="Katharine McPhee";
peepsT3TR22014[15]="Hollie Cavanagh";
peepsT3TR22014[16]="Phillip Phillips";
peepsT3TR22014[17]="Casey Abrams";
peepsT3TR22014[18]="Lil Rounds";
peepsT3TR22014[19]="Carly Smithson";
peepsT3TR22014[20]="Allison Iraheta";
peepsT3TR22014[21]="James Durbin";
peepsT3TR22014[22]="LaKisha Jones";
peepsT3TR22014[23]="Alexis Grace";
peepsT3TR22014[24]="Anoop Desai";
peepsT3TR22014[25]="Kris Allen";
peepsT3TR22014[26]="Blake Lewis";
peepsT3TR22014[27]="Matt Giraud";
peepsT3TR22014[28]="David Cook";
peepsT3TR22014[29]="Michael Sarver";
peepsT3TR22014[30]="Megan Joy";
peepsT3TR22014[31]="Scott Macintyre";
peepsT3TR22014[32]="Lee DeWyze";
peepsT3TR22014[33]="Ramiele Malubay";
peepsT3TR22014[34]="Kellie Pickler";
peepsT3TR22014[35]="Jordin Sparks";
peepsT3TR22014[36]="Stefano Langone";
peepsT3TR22014[37]="Lauren Alaina";
peepsT3TR22014[38]="Didi Benami";
peepsT3TR22014[39]="Michael Johns";
peepsT3TR22014[40]="Jason Castro";
peepsT3TR22014[41]="Casey James";
peepsT3TR22014[42]="Elliott Yamin";
peepsT3TR22014[43]="Chris Richardson";
peepsT3TR22014[44]="Paris Bennett";
peepsT3TR22014[45]="Chris Sligh";
peepsT3TR22014[46]="Katie Stevens";
peepsT3TR22014[47]="Skylar Laine";
peepsT3TR22014[48]="Colton Dixon";
peepsT3TR22014[49]="Gina Glocksen";
peepsT3TR22014[50]="Michael Lynche";
peepsT3TR22014[51]="Aaron Kelly";
peepsT3TR22014[52]="Phil Stacey";
peepsT3TR22014[53]="Paige Miles";
peepsT3TR22014[54]="Haley Scarnato";
peepsT3TR22014[55]="Mandisa";
peepsT3TR22014[56]="Stephanie Edwards";
peepsT3TR22014[57]="Bucky Covington";
peepsT3TR22014[58]="Chikezie";
peepsT3TR22014[59]="Sanjaya Malakar";
peepsT3TR22014[60]="Lisa Tucker";
peepsT3TR22014[61]="Jacob Lusk";
peepsT3TR22014[62]="Tim Urban";
peepsT3TR22014[63]="Amanda Overmyer";
peepsT3TR22014[64]="Andrew Garcia";
peepsT3TR22014[65]="Elise Testone";
peepsT3TR22014[66]="Ace Young";
peepsT3TR22014[67]="Paul McDonald";
peepsT3TR22014[68]="Syesha Mercado";
peepsT3TR22014[69]="Heejun Han";
peepsT3TR22014[70]="Kevin Covais";
peepsT3TR22014[71]="Deandre Brackensick";
peepsT3TR22014[72]="Haley Reinhart";
peepsT3TR22014[73]="Erika Van Pelt";
peepsT3TR22014[74]="Naima Adedapo";
peepsT3TR22014[75]="Kristy Lee Cook";
$(function () {
$('#targetdiv').highcharts({
credits: { enabled: false },
    chart : { marginRight: 15 },
xAxis: {
min: 0,
max: .5,
title:{ enabled: true, text: 'Model elim. probability (R2)' },
    tickInterval: .05,
labels: {
            format: '{value:.2f}'
        },
                           offset: 0
},
yAxis: { 
tickPositions: [-.20, 0, .25, .5, .75, 1, 1.2],
title: { text: 'Probability of making the Top 3'},
labels: {
formatter: function() {
var foo = parseFloat(this.value);
if(foo >= 0 && foo <= 1)
{    return this.value; }
else {return '';}
}
}
},
title: { text: 'Round 2 not-safeness vs Top 3'},
tooltip : {
formatter: function() {
var tooltip;
var foobar = this.series.data.indexOf( this.point );
tooltip = '<b>' + peepsT3TR22014[foobar] + '</b><br/>';
tooltip += this.x + ' chance of being<br/>in the bottom group<br/>';
if(this.y > 0.75)
{ tooltip += 'and made the Top 3';}
    else
    {
        tooltip += 'and didn\'t make the Top 3';
    }
return tooltip;
}
},

series: [
{
data: series1,
type: 'scatter',
lineWidth: 0,
marker: {
radius: 2.5
}  
}, {
data: series2,
lineWidth: 2,
marker: {
radius: 0
},
enableMouseTracking: false
}],
legend: {enabled: false}

});
});