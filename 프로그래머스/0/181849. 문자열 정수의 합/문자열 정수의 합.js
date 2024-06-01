function solution(num_str) {
    var answer = 0;
    for(let i of num_str) {
        answer += Number(i);
    }
    return answer;
}