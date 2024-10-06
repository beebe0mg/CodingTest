function solution(str_list, ex) {
    var answer = '';
    for(let x of str_list) {
        if(x.includes(ex)) continue;
        else answer += x;
    }
    return answer;
}