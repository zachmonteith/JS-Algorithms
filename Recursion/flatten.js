//accepts array of arrays, returns a new array with all values flattened

function flatten(arr){
  let result = [];
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        result = result.concat(flatten(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
}
