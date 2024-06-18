function solution(n) {
    var answer = [];
    n = n.toString();
    n = n.split("");
    for(let i=n.length-1; i>=0; i--) {
        answer.push(Number(n[i]));
    }
    // answer = n;
    return answer;
}