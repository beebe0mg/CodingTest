function solution(my_string) {
    var answer = my_string.split("");
    answer = answer.reverse();
    answer = answer.join("");
    return answer;
}