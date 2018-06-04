var d = process.argv[2];
var m = process.argv[3];
var y = process.argv[4];

var arr = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];

for (var i = 0; i < arr.length; i++) {

    if (arr[i] === m) {

        var day = new Date(y, i, d); //Устанавливаем дату
        var newYear = new Date(y, 11, 31);
        var msPerDay = 86400000; //количество mc в день
        var days = Math.round((newYear - day) / msPerDay);

        console.log(days);
    }
}