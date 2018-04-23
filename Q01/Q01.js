function is_palindrome(str) {//判断字符串是否为回文
    str = String(str);
    let left = 0;
    let right = str.length - 1;

    let result = true;

    if(str.length % 2 == 0){
        while(left < right){// 从左右两端对比
            if(str[left] != str[right]){
                result = false;
                break;
            }else{
                left++;
                right--;
            }
        }
    }else{
        while(left < right - 1){
            if(str[left] != str[right]){
                result = false;
                break;
            }else{
                left++;
                right--;
            }
        }
    }

    return result;
}

function is_meet(num) { //判断是否同时满足十进制、二进制，八进制为回文数
    return is_palindrome(num) && is_palindrome(num.toString(2)) && is_palindrome(num.toString(8));
}

function for_question() { //方法一
    let n = 1;

    while(true){
        if(is_meet(n) && n > 9){
            console.log("Q01 answer is: ", n);
            break;
        }else{
            n++;
        }
    }
}

function for_question2() { // 方法二：书中参考答案
    String.prototype.reserve = function () { //字符串颠倒
        return this.split("").reverse().join("");
    };

    let n = 11;

    while(true){
        if(n.toString() == n.toString().reserve() && n.toString(2) == n.toString(2).reserve() && n.toString(8) == n.toString(8).reserve()){
            console.log("Q01 answer is: ", n);
            break;
        }else{
            n+=2;
        }
    }
}

for_question();
for_question2();