function solution(array) {
    var answer = [];
    var min = Number.MIN_SAFE_INTEGER;
    for(let i in array) {
        if(min < array[i]) {
            min = array[i];
            answer[0] = min;
            answer[1] = Number(i);
        }
    }
    return answer;
}