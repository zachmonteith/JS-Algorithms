//given an array of strings, return an array of those strings capitalized
function capitalizeWords(array){
  let result = [];
  if (array.length === 0) return result;
  result.push(array[0].toUpperCase());
  return result.concat(capitalizeWords(array.slice(1)));
}
