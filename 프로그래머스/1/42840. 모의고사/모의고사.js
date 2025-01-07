function solution(answers) {
    var answer = [];
    var per1 = [1, 2, 3, 4, 5];
    var per2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var per3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var answer1=0
    var answer2=0
    var answer3=0
    
    for(let i=0; i<answers.length; i++) {
        if (answers[i] === per1[i % per1.length]) answer1++;
        if (answers[i] === per2[i % per2.length]) answer2++;
        if (answers[i] === per3[i % per3.length]) answer3++;
    }
    console.log(answer1, answer2, answer3)
    
    if(Math.max(answer1, answer2, answer3) === answer1) answer.push(1);
    if(Math.max(answer1, answer2, answer3) === answer2) answer.push(2);
    if(Math.max(answer1, answer2, answer3) === answer3) answer.push(3);
    return answer;
}