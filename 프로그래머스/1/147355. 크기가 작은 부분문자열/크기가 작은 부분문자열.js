function solution(t, p) {
    var answer = 0;
    var t1 = [];
    var p1 = p.length;
    for(let i=0; i<=t.length - p1; i++) {
        t1.push(t.substring(i, i + p1));
    }
    for(let i=0; i<t1.length; i++) {
        if(Number(t1[i]) <= Number(p)) answer++;
    }
    return answer;
}