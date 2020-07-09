function stringifyNumbers (obj) {
  let result = {};
  for( var key in obj) {
    if (typeof(obj[key]) === "number") {
      result[key] = obj[key].toString();
    } else if (typeof(obj[key]) === "object" && !Array.isArray(obj[key])){
      result[key] = stringifyNumbers(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
