function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    for(let i=0; i<score.length; i+=m) {
        var minscore = score[i + m - 1];
        if(minscore) answer += minscore * m;
    }
    return answer;
}