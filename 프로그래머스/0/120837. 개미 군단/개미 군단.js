function solution(hp) {
    var answer = 0;
        if(hp/5) answer += Math.trunc(hp/5);
        if(hp%5/3) answer += Math.trunc(hp%5/3);
        if(hp%5%3) answer += Math.trunc(hp%5%3);  
    return answer;
}