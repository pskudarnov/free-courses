var i = process.argv[2];
var a = process.argv[3];
var b = process.argv[4];

var x = parseInt(i, a); // I - числов перевели в 10 системе счисления

var y = x.toString(b); // перевели полученое число из 10 системы в B-систему

console.log(y);