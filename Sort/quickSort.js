function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr
}

function pivotHelper(arr, start=0, end=arr.length-1){
  let pivot = arr[start];
  let pidx = start;
  for (let i = start+1; i <= end; i++){
    if (arr[i] < pivot) {
      pidx++;
      console.log("inside helper gonna swap", arr[i], arr[pidx])
      swap(arr, i, pidx);
    }
  }
  swap(arr, start, pidx);
  return pidx;
}

function quickSort(arr, left=0, right=arr.length-1){
  if(left < right){
    let pidx = pivotHelper(arr, left, right);
    quickSort(arr, left, pidx-1);
    quickSort(arr, pidx+1, right);
  }
  return arr;
}
