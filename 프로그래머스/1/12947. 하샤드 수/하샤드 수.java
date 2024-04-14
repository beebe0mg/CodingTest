class Solution {
    public boolean solution(int x) {
        boolean answer = false;
        int ans = 0;
        int x1 = x;
        while(x!=0) {
            ans += x%10;
             x = x/10;
        }
        if(x1%ans==0) answer = true;
        return answer;
    }
}