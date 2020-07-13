function mergeSortedArrays(arrA, arrB){
  var result = [];
  while (0 < arrA.length && 0 < arrB.length) {
    if (arrA[0] < arrB[0]) result.push(arrA.shift());
    else result.push(arrB.shift());
  }
  return result.concat(arrA, arrB);
}

function mergeSort(arr){
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length/2);
  let arrA = arr.slice(0, half);
  let arrB = arr.slice(half);
  return mergeSortedArrays(mergeSort(arrA), mergeSort(arrB));
}
