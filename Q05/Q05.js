function for_question1(money) {
    const coins = [500, 100, 50, 10]; // 可兑换的硬币面额
    let limits = coins.map((elem)=>{ // 因为最大兑换硬币数量为15，因此要根据硬币面额来确定每种面额的最大兑换数量！
        return (money / elem > 15)? 15: money / elem;
    });
    let count = 0;

    for(let c1 = 0; c1 <= limits[0]; c1++){
        for(let c2 = 0; c2 <= limits[1]; c2++){
            for(let c3 = 0; c3 <= limits[2]; c3++){
                for(let c4 = 0; c4 <= limits[3]; c4++){
                    if(c1 + c2 + c3 + c4 <= 15 && c1*500 + c2*100 + c3*50 + c4*10 == money){ // 需满足硬币总数小于等于15，且硬币面额总数等于所兑换纸币
                        count++;
                    }
                }
            }
        }
    }

    console.log(count);
}

for_question1(1000);