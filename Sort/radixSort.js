function getDigit(num, place) {
  return Math.floor(Math.abs(num) / 10 ** (place)) % 10;
}

function digitCount(num){
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(arr){
  let maxDigits = 0;
  for (let i=0; i<arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

function radixSort(arr){
  let loops = mostDigits(arr);
  for (let i=0; i<loops; i++){
    let buckets = [[],[],[],[],[],[],[],[],[],[]];
    for (let num of arr){
      let digit = getDigit(num, i);
      buckets[digit].push(num)
    }
    arr = buckets.flat();
  }
  return arr;
}
