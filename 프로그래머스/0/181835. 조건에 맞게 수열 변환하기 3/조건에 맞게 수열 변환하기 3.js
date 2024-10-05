function solution(arr, k) {
    var answer = [];
    for(let x of arr) {
        if(k % 2 === 0) answer.push(x+k);
        else answer.push(x*k);
    }
    return answer;
}