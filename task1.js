function numberSystems(i,a,b) {

    var x = parseInt(i, a); // I - числов перевели в 10 системе счисления

    var y = x.toString(b); // перевели полученое число из 10 системы в B-систему

    console.log(y);

    return y;
}

console.log(numberSystems(process.argv[2], process.argv[3],process.argv[4]));