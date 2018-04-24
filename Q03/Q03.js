function for_question1() {
    let status = new Array(100).fill(false); // 初始化100张『牌』的状态，false即为背面朝上

    for(let i = 2; i <= 100; i++){ // 从第二张牌开始翻
        for(let n = i - 1; n < 100; n+=i){
            status[n] = !status[n]; // 翻牌改变状态
        }
    }

    let result = [];

    status.forEach((val, idx)=>{
        if(!val) result.push(idx+1); // 选出背面朝上的牌
    });

    console.log(result);
}

function for_question2() {
    let num = new Array(100).fill(0); // 初始化每张牌的翻牌次数为0

    for(let i = 2; i <= 100; i++){ // 从第二张牌开始翻
        for(let n = i - 1; n < 100; n+=i){
            num[n]++; // 翻牌次数增加
        }
    }

    let result = [];

    num.forEach((val, idx)=>{
        if(val % 2 == 0) result.push(idx+1); // 翻牌次数为偶数的即为背面朝上
    });

    console.log(result);
}

let arr = new Array(10).fill(true);

console.log(arr);

for_question1();
for_question2();