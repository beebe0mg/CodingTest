class Solution {
    public int solution(String my_string, String is_prefix) {
        int answer = 0;
        boolean startsWithHello = my_string.startsWith(is_prefix);
        if(startsWithHello==true) answer = 1;
        return answer;
    }
}