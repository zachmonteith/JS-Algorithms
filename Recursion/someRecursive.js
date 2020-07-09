//recursive function, accepts array and a callback as args.
//returns true if any value in array returns true in the callback.

function someRecursive(arr, callback){
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}
