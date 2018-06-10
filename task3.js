var t1 = process.argv[2];
var t2 = process.argv[3];

var t = t1 + t2;
var hour = Math.floor(t / 3600); //часы
var minutes = Math.floor((t - (hour * 3600)) / 60);   //минуты
var seconds = t - ((hour * 3600) + (minutes * 60)); //секунды

var h = plural(hour, ['час', 'часа', 'часов']);
var m = plural(minutes, ['минута', 'минуты', 'минут']);
var s = plural(seconds, ['секунда', 'секунды', 'секунд']);

console.log(h + m + s);

function plural(number, title) {
    if (number === 0) return '';

    var i = 2;
    var remainder = number % 10;

    if (remainder === 1) {
        i = 0;
    } else if (remainder > 1 && remainder < 5) {
        i = 1;
    }

    return number + ' ' + title[i] + ' ';
}