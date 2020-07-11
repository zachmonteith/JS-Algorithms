//recursive and iterative selection sort, because why not?
function recurSelSort(arr){
  if (arr.length <= 1) return arr;
  let min = 0;
  for(let i = 1; i < arr.length; i++) if (arr[min] > arr[i]) min = i;
  return arr.splice(min,1).concat(recurSelSort(arr));
  }

  function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr
  }

function selectionSort(arr){
  for (let i = 0; i < arr.length - 1; i++){
    let min = i;
    for (let j = i+1; j < arr.length; j++){
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) arr = swap(arr, i, min);
  }
return arr;
}
