class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String str = Integer.toString(a) + Integer.toString(b);
        int value = Integer.parseInt(str);
        if(value > 2 * a * b) {
            answer = value;
        }
        else {
            answer = 2 * a * b;
        }
        return answer;
    }
}