//return zum of all even numbers in an object.
//note, may contain nested objects.

function nestedEvenSum (obj) {
  let sum = 0;
  for( var key in obj) {
    if (typeof(obj[key]) === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (obj[key] % 2 === 0){
      sum += obj[key];
    }
  }
  return sum;
}
