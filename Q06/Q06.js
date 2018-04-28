function for_question() {
    let n = 2;
    let count = 0;

    while(n < 10000){
        let cur = 3*n + 1; // 初始操作
        while(cur != 1 && cur != n){
            if(cur % 2 == 0){ // 根据奇偶不同操作
                cur /= 2;
            }else{
                cur = 3*cur + 1;
            }
        }

        if(cur == n) count++; // 若等于当前偶数，则表明成功返回到自身
        n+=2; // 偶数
    }

    console.log(count);
}

for_question();