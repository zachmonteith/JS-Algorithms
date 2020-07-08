function factoIter(num){
  let total = 1;
  for(let i = num; i < 0; i--){
    total *= i
  }
  return total;
}

function factoRecur(num){
  if(num === 1) return 1;
  return num * factoRecur(num-1);
}
