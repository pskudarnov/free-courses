var t1 = process.argv[2];
var t2 = process.argv[3];

var t = t1 + t2;
var hour = Math.floor(t / 3600); //часы
var minutes = Math.floor((t - (hour * 3600)) / 60);   //минуты
var seconds = t - ((hour * 3600) + (minutes * 60)); //секунды

if (hour === 0) console.log('');
var i = 'часов';
var remainder = hour % 10;

if (remainder === 1) {
    i = 'час';
} else if (remainder > 1 && remainder < 5) {
    i = 'часа';
}

var h = hour + ' ' + i + ' ';

if (minutes === 0) console.log('');

var x = 'минут';
var remainder2 = minutes % 10;

if (remainder2 === 1) {
    x = 'минута';
} else if (remainder2 > 1 && remainder2 < 5) {
    x = 'минуты';
}

var m = minutes + ' ' + x + ' ';

var y = 'секунда';
var remainder3 = seconds % 10;

if (remainder3 === 1) {
    y = 'секунды';
} else if (remainder3 > 1 && remainder3 < 5) {
    y = 'секунд';
}

var s = seconds + ' ' + y + ' ';


console.log(h + m + s);

