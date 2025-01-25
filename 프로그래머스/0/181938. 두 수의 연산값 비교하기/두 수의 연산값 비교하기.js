function solution(a, b) {
    var answer = a.toString()
    var answer1 = b.toString()
    var answer2 = answer + answer1
    
    var answer3 = 2 * a * b
    
    if(answer2 >= answer3) return Number(answer2)
    else return answer3;
}