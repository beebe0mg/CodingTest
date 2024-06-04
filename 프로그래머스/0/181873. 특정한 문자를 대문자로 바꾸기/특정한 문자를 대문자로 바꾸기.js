function solution(my_string, alp) {
    var answer = '';
    for(let i of my_string) {
        if(i === alp) answer += i.toUpperCase();
        else answer += i;
    }
    return answer;
}