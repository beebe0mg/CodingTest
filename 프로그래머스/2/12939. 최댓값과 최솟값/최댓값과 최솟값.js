function solution(s) {
    var answer = '';
    var arr1 = s.split(" ");
    answer = Math.min(...arr1) + ' ' + Math.max(...arr1);
    return answer;
}