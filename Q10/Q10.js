const rule1 = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]; // 欧洲规则

const rule2 = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 0, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2]; // 美国规则

function add_num(arr, start, n) {
    let result = 0;

    for(let i = start; i< start + n; i++){
        result += arr[i % arr.length]; // 循环数组，即首尾相连的数组，求连续的n项元素之和
    }

    return result;
}

function get_max(rule, n) { // 得出当前数组中连续n项之和中的最大值
    let max = 0;

    for(let i = 0; i < 36; i++){
        let addN = add_num(rule, i, n);
        if(addN > max) max = addN;
    }

    return max;
}

function for_question() {
    let count = 0;

    for(let n = 2; n < 37; n++){
        if(get_max(rule1, n) < get_max(rule2, n)) count++; // 欧洲规则的最大值小于美国规则的最大值
    }

    console.log(count);
}

console.log(get_max(rule1, 3), get_max(rule2, 3));
for_question();