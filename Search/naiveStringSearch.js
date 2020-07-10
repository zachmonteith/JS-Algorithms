//count the number of times a shorter string appears in a longer string
function naiveStringSearch(long, short){
  let count = 0;
  for(let i = 0; i < long.length; i++){
    for(let j = 0; j < short.length; j++){
      if (short[j] !== long[i+j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
//this approach is functional but has time complexity O(n^2)
//this is a use case for Knuth-Morris-Pratt algorithm!
