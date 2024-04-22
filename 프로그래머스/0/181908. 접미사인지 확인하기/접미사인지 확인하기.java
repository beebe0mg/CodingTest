class Solution {
    public int solution(String my_string, String is_suffix) {
        int answer = 0;
        boolean gg = my_string.endsWith(is_suffix);
        if(gg==true) answer = 1;
        return answer;
    }
}