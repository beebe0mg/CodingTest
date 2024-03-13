import java.util.Arrays;
class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        Arrays.sort(numbers);
        for(int i=0; i<numbers.length-1; i++) {
            answer = numbers[i] * numbers[i+1];            
        }
        return answer;
    }
}