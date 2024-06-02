function solution(num_list, n) {
    var answer = [];
    // for(let i=n-1; i<num_list.length; i++) {
    //     answer.push(num_list[i]);
    // }
    answer = num_list.slice(n-1);
    return answer;
}