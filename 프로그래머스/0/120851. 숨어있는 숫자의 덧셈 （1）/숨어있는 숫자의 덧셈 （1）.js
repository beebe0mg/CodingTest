function solution(my_string) {
    var answer = 0;
    for(let i of my_string) {
        if(i >= 1 || i <= 9) {
            answer += Number(i);
        }
    }
    return answer;
}