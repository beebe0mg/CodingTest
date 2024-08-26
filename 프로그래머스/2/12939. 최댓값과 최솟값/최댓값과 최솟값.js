function solution(s) {
    var answer = '';
    var arr1 = s.split(" ");
    arr1.sort(function(a, b){
        return a - b;
    })
    var str = arr1.shift();
    answer += str;
    answer += " ";
    answer += arr1.pop();
    return answer;
}