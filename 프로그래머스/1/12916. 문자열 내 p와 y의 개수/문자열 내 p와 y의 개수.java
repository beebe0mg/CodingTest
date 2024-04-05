class Solution {
    boolean solution(String s) {
        boolean answer = true;
        boolean answer1 = false;
        int count1 = 0;
        int count2 = 0;
        for(int i=0; i<s.length(); i++) {
            if(s.charAt(i)==80 || s.charAt(i)==112) count1++;
            else if(s.charAt(i)==89 || s.charAt(i)==121) count2++;
        }
        if(count1 == count2) return answer;
        else return answer1;
    }
}