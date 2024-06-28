function solution(arr, divisor) {
    var answer = [];
    for(let i of arr) {
        if(i%divisor===0) {
            answer.push(i);
           
        }
    }
    answer.sort(function(a, b){
            return a - b;   // return b - a : 내림차순 
    });
    
    if(answer.length===0) {
        answer.push(-1);
    }
    
    return answer;
}