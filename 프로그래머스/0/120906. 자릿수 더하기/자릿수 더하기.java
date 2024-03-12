class Solution {
    public int solution(int n) {
        String answer1 = Integer.toString(n);
        int answer = 0;
        for(int i=0; i<answer1.length(); i++) {
            answer += Integer.parseInt(answer1.substring(i, i+1));
        }
        return answer;
    }
}