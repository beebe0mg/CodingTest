function solution(food) {
    var answer = '';
    var forans = '';
    for(let i=1; i<food.length; i++) {
        var count = Math.floor(food[i]/2);
        if(count) forans += String(i).repeat(count);
    }
    answer = forans + '0' + forans.split('').reverse().join('');
    return answer;
}