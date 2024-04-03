class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int answer1 = 0;
        int answer2 = 0;
        int len = num_list.length;
        for(int i=1; i<len; i+=2) {
            answer1 += num_list[i];
        }
        for(int i=0; i<len; i+=2) {
            answer2 += num_list[i];
        }
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