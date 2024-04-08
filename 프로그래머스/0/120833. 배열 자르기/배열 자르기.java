import java.util.Arrays;
class Solution {
    public int[] solution(int[] numbers, int num1, int num2) {
        int[] answer = Arrays.copyOfRange(numbers, num1, num2+1);
        // int numbers = Arrays.copyOfRange(numbers, num1, num2);
        return answer;
    }
}