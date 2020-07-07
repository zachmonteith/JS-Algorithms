function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (maxSum < tempSum) {
             maxSum = tempSum;
    }
    }
    return maxSum;
}


function minSubArrayLen(arr, target){
    let tempSum = 0;
    let i = 0;
    while (tempSum < target ){
        tempSum += arr[i];
        i++;
    }
    let minLen = i;
    for (let j = 0; j <= arr.length; j++ ) {
        tempSum -= arr[j];
        tempSum >= target ? --minLen : tempSum += arr[j + minLen]
    }
  if (minLen > arr.length) return 0;
  return minLen;
}
