//given an array of strings, capitalize first letter of each
function capitalizeFirst(array){
  let result = [];
  if (array.length === 0) return result;
  result.push(array[0][0].toUpperCase().concat(array[0].slice(1)));
  return result.concat(capitalizeFirst(array.slice(1)));
}
