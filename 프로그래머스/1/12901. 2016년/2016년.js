function solution(a, b) {
    var answer = '';
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    answer = week[new Date(2016, a-1, b).getDay()]
    return answer;
}