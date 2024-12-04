function solution(myString) {
    var answer = '';
    myString = myString.toLowerCase();
    for(let i of myString) {
        if(i === 'a') answer += i.toUpperCase();
        else answer += i.toLowerCase();
    }
    return answer;
}