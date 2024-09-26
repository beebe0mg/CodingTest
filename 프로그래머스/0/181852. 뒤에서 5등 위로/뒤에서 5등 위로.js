function solution(num_list) {
    var answer = [];
    num_list.sort(function(a, b){
            return a - b; 
    });
    answer = num_list.slice(5, num_list.length);
    return answer;
}