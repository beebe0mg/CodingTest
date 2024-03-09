class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int answer1 = 1;
        int len = num_list.length;
        if(len >= 11) {
            for(int i=0; i<len; i++) {
                answer += num_list[i];
            }
        }
        else if(len <= 10){
            for(int i=0; i<len; i++) {
                answer1 *= num_list[i];
            } 
            answer = answer1;
        }   
        return answer;
    }
}