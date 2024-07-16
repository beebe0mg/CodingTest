function solution(arr) {
    var answer = [];
    var arr1 = Math.min(...arr);
    for(let i of arr) {
        if(i !== arr1) answer.push(i);
    }
    if(arr.length === 1) answer.push(-1);
    return answer;
}