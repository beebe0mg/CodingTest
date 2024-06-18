function solution(n) {
    var answer = 0;
    n = n.toString();
    n = n.split("");
    n = n.sort();
    n = n.reverse();
    n = n.map(Number);
    answer = n.join('');
    return Number(answer);
}