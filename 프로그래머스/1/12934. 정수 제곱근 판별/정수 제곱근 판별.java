class Solution {
    public long solution(long n) {
        for(long i=1; i<=n; i++)
            if(i==Math.sqrt(n)) return (i+1)*(i+1);
        
            return -1;
    }
}