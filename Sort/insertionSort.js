function insertionSort(arr){
  for(let right = 1; right < arr.length; right++){
    let temp = arr[right];
    for(var left = right - 1; left >= 0 && arr[left] > temp; left--){
      arr[left+1] = arr[left];
    }
    arr[left+1] = temp;
  }
  return arr;
}
