function solution(arr) {
    var answer = [];
    let an = Math.min(...arr);
    for(let v of arr){
        if(v !== an){
            answer.push(v);
        }
    }
    if(arr.length === 1) 
        answer.push(-1);
    return answer;
}