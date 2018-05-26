const step = 4;
let count = 0;

function isSame(a, b) { // 递归法，a和b代表各自当前所在的阶层
    if(a < b){
        for(let i = 1; i <= step; i++){ // 循环下一步所出现的各种情况
            for(let j = 1; j <= step; j++){
                isSame(a + i, b - j);
            }
        }
    }else if(a === b){ // 判断两者是否在同一阶层
        count++;
    }
}

function isSame2(num) { // 动态规划法，即前一步对后一步的影响
    let stateA = new Array(num + 1).fill(0); // 当前操作的所在阶层的情况，数组元素代表第i层在当前操作下有多少种走法；一次操作即为上楼梯或下楼梯（1-4步）
    let counts = 0;
    stateA[0] = 1;

    for(let i = 0; i < num; i++){ // 最多能进行n次操作
        let temp = new Array(num + 1).fill(0); // 下一步(i+1)操作后所在阶层的情况
        for(let idx = i; idx <= num; idx++){ // 根据第i次操作的情况得出第i+1次操作的情况
            for(let n = 1; n <= step; n++){
                if(idx + n <= num) temp[idx + n] += stateA[idx];
            }
        }
        stateA = temp.slice(0); // 将第i+1次操作复制给stateA

        for(let j in stateA){ // 新增处于同一阶层的次数，stateA[j]为A在当前操作所处第j层的种数，stateA[num - j]则代表B当前操作所处第j层的种数；
            counts += stateA[j] * stateA[num - j];
        }
    }

    console.log(counts);
}

isSame2(10);
isSame(0, 10);
console.log(count);