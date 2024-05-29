function solution(my_string, index_list) {
    var answer = '';
    for(let i of index_list) {
        answer += my_string.charAt(i);
    }
    return answer;
}