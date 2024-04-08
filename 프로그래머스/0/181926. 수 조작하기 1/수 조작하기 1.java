class Solution {
    public int solution(int n, String control) {
        int answer = n;
        for(int i=0; i<control.length(); i++) {
            if(control.charAt(i) == 119) answer += 1;
            else if(control.charAt(i) == 115) answer -= 1;
            else if(control.charAt(i) == 100) answer += 10;
            else if(control.charAt(i) == 97) answer -= 10;
        }
        return answer;
    }
}