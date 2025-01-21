function solution(s){
    var answer = [];

    for(let i of s) {
        if(i === '(') answer.push(i);
        else {
            if(answer.length === 0) return false
            answer.pop();
        }
    }
    
    if(answer.length != 0) return false

    return true;
}