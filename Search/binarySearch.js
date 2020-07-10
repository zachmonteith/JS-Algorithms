function binarySearch(arr, val){
  let left = 0;
  let right = arr.length-1;
  while (left <= right) {
    let mid = Math.round((left + right) / 2);
    if (arr[mid] === val){
      return mid;
    } else if (arr[mid] < val){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
