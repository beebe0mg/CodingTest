function solution(n, k) {
    var n1 = Math.trunc(n/10);
    var answer = n * 12000 + k * 2000 - n1 * 2000;
    return answer;
}