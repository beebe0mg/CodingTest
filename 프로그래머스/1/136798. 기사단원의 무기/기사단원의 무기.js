function solution(number, limit, power) {
    var answer = 0;
    var cnt = 0;
    var num = [];
    for(let i=1; i<=number; i++) {
        for(let j=1; j<= Math.sqrt(i); j++) {
            if(i%j===0) {
                cnt++;
                if (j !== i / j) cnt++;
            }
        }
        if(cnt !== 0) num.push(cnt);
        cnt = 0;
    }
    for(let i=0; i<num.length; i++) {
        if(num[i] > limit) num[i] = power;
        answer += num[i];
    }
    return answer;
}