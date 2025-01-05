function solution(nums) {
    var answer = 0;
    const arr = [...new Set(nums)];
    if(arr.length > nums.length/2) answer = nums.length/2;
    else answer = arr.length;
    return answer;
}