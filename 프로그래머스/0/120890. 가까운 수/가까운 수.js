function solution(array, n) {
    var closer = [];
    
    for (let i of array) {
        closer.push(Math.abs(n - i));
    }
    
    var mis = Math.min(...closer);
    var candidates = [];

    // 가장 가까운 값들만 후보로 수집
    for (let j = 0; j < closer.length; j++) {
        if (closer[j] === mis) {
            candidates.push(array[j]);
        }
    }

    // 후보들 중에서 가장 작은 값 반환
    var answer = Math.min(...candidates);
    
    return answer;
}
