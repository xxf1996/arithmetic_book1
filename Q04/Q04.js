function for_question1(n, m) {
    let woodN = 1; // 当前木棒的数量，初始时只有一根
    let num = 0; // 切割的轮次

    while(woodN < n){
        if(woodN > m){ // 根据当前木棒的数量与人数的关系，来判断切割的次数
            woodN += m; // 切割多少次，木棒的数量则相应增加多少次
        }else{
            woodN += woodN;
        }
        num++;
    }

    console.log(num);
}

function for_question2(n, m){ // 逆向合并木棒
    let num = 0; // 合并轮次数
    let woodN = n; // 当前木棒数，初始时为n根木棒

    while(woodN > 1){
        if(woodN / 2 > m){ // 根据目前木棒的数量，判断能合并多少次
            woodN -= m;  // 合并多少次木棒数就相应减少多少次
        }else{
            woodN -= Math.floor(woodN / 2);
        }
        num++;
    }
    console.log(num);
}

function for_question3(n, m) { // 逆向合并木棒的『较真』版
    let num = 0;
    let elem = new Array(n).fill(1); // 初始化n根长度为1的木棒……用列表来呈现当前木棒的各自长度

    while(elem.length > 1){
        let arr = [];
        let last = -1;

        for(let i = 0; i < m; i++){
            if(elem.length >= 2*(i + 1)){
                arr.push(elem[2*i] + elem[2*i + 1]); // 两两合并
                last = 2*i + 1;
            }else{
                break;
            }
        }

        elem.splice(0, last + 1, ...arr);
        num++;
    }

    console.log(num);
}

for_question1(20, 3);
for_question1(100, 5);
for_question2(20, 3);
for_question2(100, 5);
for_question3(20, 3);
for_question3(100, 5);