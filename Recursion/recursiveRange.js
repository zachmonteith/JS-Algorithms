//function recursiveRange accepts num and sum all nums from 0 to num

function recursiveRange(num){
  if (num === 0) return 0;
  return num + recursiveRange(num-1);
}
