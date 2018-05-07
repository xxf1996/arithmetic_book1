function split_sum(str) { // 将一个数的各位数相加起来
    str = String(str);

    return str.split('').reduce((sum, elem)=>{
        return Number(sum) + Number(elem);
    });
}

function fib_test1(n) { // 斐波拉契数列两项相除，最后逼近黄金分割率1.618
    let former = 1; // 斐波拉契数列的前一项
    let cur = 1; // 当前项

    for(let i = 0; i < n; i++){
        console.log(cur / former);
        [former, cur] = [cur, cur + former]; // ES6解构赋值，更新数列项
    }
}

function for_question() {
    let former = 1; // 斐波拉契数列的前一项
    let cur = 2; // 当前项
    let res = [];

    while(res.length < 11){
        let sum = split_sum(cur);

        if(cur % sum === 0){ // 判断是否能整除
            res.push(cur);
        }

        [former, cur] = [cur, cur + former]; // ES6解构赋值，更新数列项
    }

    console.log(res);
}

for_question();
fib_test1(50);