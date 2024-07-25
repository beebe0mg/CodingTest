function solution(number) {
    var answer = 0;
    for(let i=0; i<number.length; i++) {
        for(let j=i+1; j<number.length; j++) {
            for(let x=j+1; x<number.length; x++) {
                if(number[i] + number[j] + number[x] === 0) answer++;
            }
        }
    }
    return answer;
}