function solution(n) {
    var answer = 0;
    var n2 = n.toString(2);
    var countn2 = n2.split('1').length - 1;
    answer = n + 1;
    while(true) {
        if(answer.toString(2).split('1').length - 1 === countn2) return answer;
        answer++;
    } 
}