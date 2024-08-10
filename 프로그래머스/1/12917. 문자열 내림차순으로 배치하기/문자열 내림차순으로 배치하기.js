function solution(s) {
    var answer = '';
    s = s.split("");
    s.sort(function (a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    });
    answer = s.join("");
    return answer;
}