let dayjs = require('./dayjs.min.js');

function is_meet(t) {
    let n = Number(t);

    return parseInt(n.toString(2).split("").reverse().join(""), 2) == t;
}

function for_question() {
    let begin = dayjs('1964-10-10');
    let end = dayjs('2020-07-25');
    let result = [];

    while(begin.isBefore(end)){
        if(is_meet(begin.format('YYYYMMDD'))) result.push(begin.format('YYYYMMDD'));
        begin = begin.add(1, 'day');
    }

    console.log(result);
}

for_question();
console.log(dayjs('1970-1-1').add(1, 'day').format('YYYYMMDD')); // bug已修复