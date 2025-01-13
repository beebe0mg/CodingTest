function solution(n, m) {
    var answer = [];
    var g = 1;
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            g = i;
        }
    }
    answer.push(g);
    
    var l = 1;
    while(true){
      if((l % n === 0) && (l % m === 0)){
        break;
      }
      l++;
    }  
    answer.push(l);
    
    return answer;
}