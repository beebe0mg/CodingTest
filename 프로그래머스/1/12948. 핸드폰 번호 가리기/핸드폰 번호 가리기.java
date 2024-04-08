class Solution {
    public String solution(String phone_number) {
        String answer = "";
        for(int i=0; i<phone_number.length() - 4; i++) {
            answer += '*';
        }
        for(int j = phone_number.length() -4; j<phone_number.length(); j++) {
            answer += phone_number.charAt(j);   
        }
        
        return answer;
    }
}