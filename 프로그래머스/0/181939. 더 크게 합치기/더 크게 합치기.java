class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        int answer1 = Integer.parseInt(Integer.toString(a) + Integer.toString(b));
        int answer2 = Integer.parseInt(Integer.toString(b) + Integer.toString(a));
        
        if(answer1 > answer2) {
            answer = answer1;
        }
        else if(answer2 > answer1) {
            answer = answer2;
        }
        else answer = answer1;
        
        return answer;
    }
}