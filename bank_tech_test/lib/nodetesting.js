var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date(1995, 11, 17);

console.log(today.toLocaleDateString("en-GB")); // 9/17/2016