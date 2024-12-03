function solution(my_string) {
    var answer = [];
    answer1 = my_string.split(' ');
    for(let x of answer1) {
        if(x !== "") answer.push(x);
    }
    return answer;
}