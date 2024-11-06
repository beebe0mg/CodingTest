function solution(num_list) {
    var answer = [];
    answer = num_list.sort(function(a,b) {
        return a - b; 
    });
    answer = answer.slice(0, 5)
    return answer;
}