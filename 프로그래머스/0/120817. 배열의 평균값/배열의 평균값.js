function solution(numbers) {
    var answer = 0;
    var sum = 0;
    for(var i of numbers) {
        sum += i;
        answer = sum/numbers.length;
    }
    return answer;
}