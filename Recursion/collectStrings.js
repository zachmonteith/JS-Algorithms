//parse object for strings and return all strings in an array

function collectStrings(obj){
  let array = [];
  for(var key in obj){
    if (typeof(obj[key])=== "string"){
      array.push(obj[key])
    } else if (typeof(obj[key]) === "object"){
      array = array.concat(collectStrings(obj[key]));
    }
  }
  return array;
}
