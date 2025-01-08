function solution(participant, completion) {
    var answer = '';
    completion.sort()
    participant.sort() 
    for(let i=0; i<participant.length; i++) {
        if(participant[i] !== completion[i]) return participant[i]
    }
    for(let j=0; j<participant.length; j++) {
        if(!completion.includes(participant[j])) answer = participant[j]
    }
    return answer;
}