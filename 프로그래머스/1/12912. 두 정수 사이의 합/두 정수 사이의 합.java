class Solution {
    public long solution(int a, int b) {
        long answer = 0;
        for(int i=a; i<=b; i++) {
            answer += i;
        }
        for(int i=a; i>=b; i--) {
            answer += i;
        }
        if(a==b) {
            answer = a;
        }
        return answer;
    }
}