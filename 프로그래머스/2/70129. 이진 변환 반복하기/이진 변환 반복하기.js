function solution(s) {
    var answer = [];
    var cnt = s.split('0').length - 1;
    var whicnt = 0;
    while(s.length > 1) {
        s = s.replace(/0/g,'');
        s = Number(s.length).toString(2);
        cnt += s.split('0').length - 1;
        whicnt++;
    }
    answer.push(whicnt);
    answer.push(cnt)
    return answer;
}