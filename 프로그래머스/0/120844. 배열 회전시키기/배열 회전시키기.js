function solution(numbers, direction) {
    var answer = [];
    if(direction === "right") {
        answer.push(numbers.pop());
        for(let i=0; i<numbers.length; i++) {
            answer.push(numbers[i]);
        }
    }
    else {
        for(let i=1; i<numbers.length; i++) {
            answer.push(numbers[i]);
        }
        answer.push(numbers[0]);
    }
    return answer;
}