//implement bubble sort algorithm

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr
}

function bubbleSort(arr){
  for(let right = arr.length - 1; right > 0; right--){
    let sorted = true;
    for(let left = 0; left < right; left++){
      if (arr[left] > arr[left+1]) {
        swap(arr, left, left+1);
        sorted = false;
      }
    }
    if(sorted) break;
  }
  return arr;
}
