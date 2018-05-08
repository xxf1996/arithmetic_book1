const limit = 100; // 位数限制

function meet_num(n, mode = true) {
    n = String(n);
    let arr = [];
    let status = new Array(10).fill(0); // 初始化各个数字（0-9）的状态，0表现没有出现，1表示出现过
    let result = limit;

    if(mode){ // 包括整数部分
        arr = n.split(/\./).join('').split(''); // 将小数点前后数字整合，拆分为为一个个的数字
    }else{ // 不包含整数部分
        let s = n.split(/\./);
        if(s.length === 2){ // 判断是否含有小数部分
            arr = s[1].split(''); // 取小数部分的数字进行拆分
        }
    }

    if(arr.length > 9){ // 对位数>=10的数字进行分析
        for(let i = 0; i < arr.length; i++){
            let idx = arr[i];

            if(status[idx] === 0) status[idx] = 1; // 判断当前数字是否已经出现过

            if(i > 8 && status.every(elem => elem === 1)){ // 判断从第一位数字到当前位数0-9是否已经全部出现
                result = i + 1; // 记录当前位数
                break;
            }
        }
    }

    return result; // 返回最早出现过0-9数字的位数
}

function for_question(mode = true) {
    let n = 2;
    while(true){
        if(meet_num(Math.sqrt(n), mode) === 10){ // 最早出现0-9全部数字的情况为10位数
            console.log(n, Math.sqrt(n));
            break;
        }
        n++;
    }
}

console.log(meet_num(Math.sqrt(13)), Math.sqrt(2).toFixed(20));
for_question();
for_question(false);