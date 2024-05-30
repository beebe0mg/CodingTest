function solution(num_list, n) {
    var answer = [];
    for(let i in num_list) {
        if(i%n==0) answer.push(num_list[i]);
    }
    return answer;
}