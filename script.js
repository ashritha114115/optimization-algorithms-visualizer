const ctx = document.getElementById('paretoChart').getContext('2d');

new Chart(ctx, {
type: 'scatter',

data: {
datasets: [{
label: 'Laptop Pareto Points',
data: [
{x:450,y:55},
{x:1200,y:75},
{x:1500,y:80},
{x:1356,y:65},
{x:2800,y:99}
],
pointRadius:6
}]
},

options:{
scales:{
x:{
title:{
display:true,
text:'Price'
}
},

y:{
title:{
display:true,
text:'Performance'
}
}
}
}

});
