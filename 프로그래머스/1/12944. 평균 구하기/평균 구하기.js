function solution(arr) {
    var answer = 0;
    var avg = 0;
    for(let i of arr) {
        avg += i;
    }
    answer = avg / arr.length
    return answer;
}