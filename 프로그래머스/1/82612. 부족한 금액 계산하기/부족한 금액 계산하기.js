function solution(price, money, count) {
    var answer = 0;
    var answer1 = 0;
    for(let i=1; i<=count; i++) {
        answer1 += price*i;
    }
    if(answer1 > money) answer = answer1 - money;
    return answer;
}