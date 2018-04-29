let dayjs = require('./dayjs.min.js');

function is_meet(t) {
    let n = Number(t);

    return parseInt(n.toString(2).split("").reverse().join(""), 2) == t;
}

function for_question() {
    let begin = dayjs('1964-10-10');
    let end = dayjs('2020-07-25');
    let sp = dayjs('1970-1-1');
    let result = [];

    while(begin.isBefore(end)){
        if(is_meet(begin.format('YYYYMMDD'))) result.push(begin.format('YYYYMMDD'));
        if(begin.isSame(sp)){ // 貌似1970-1-1往后增加一天会有bug，需要手动设置
            begin = dayjs('1970-1-2');
        }else{
            begin = begin.add(1, 'day');
        }
    }

    console.log(result);
}

for_question();
console.log(dayjs('1970-1-1').add(1, 'day').format('YYYYMMDD'));