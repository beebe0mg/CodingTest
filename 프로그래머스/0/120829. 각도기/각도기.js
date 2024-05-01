function solution(angle) {
    var answer = 4;
    if(angle < 90 && angle > 0) answer = 1;
    else if(angle === 90) answer = 2;
    else if(angle > 90 && angle < 180) answer = 3;
    return answer;
}