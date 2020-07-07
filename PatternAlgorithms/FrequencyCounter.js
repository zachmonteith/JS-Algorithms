function sameFrequency(num1, num2){
    let str1 = num1.toString();
    let str2 = num2.toString();
    let hash1 = {};
    let hash2 = {};
    for (var char of str1) {
        hash1[char] = ++hash1[char] || 1;
    }
    for (var car of str2) {
        hash2[car] = ++hash2[car] || 1;
    }
    for (var key of str1) {
        if (hash1[key] !== hash2[key]) {
            return false;
        }
    }
    return true;
}

function isAlphaNum(char){
    var code = char.charCodeAt();
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
    }
return true;
}

function charCount(str){
    // make object to return at end
let hash = {};
// loop over string
	for (var char of str) {

        // for each character, if char is a number/letter and already key in object, increment.
	    if (isAlphaNum(char)) {
	       char = char.toLowerCase()
	       hash[char] = ++hash[char] || 1;
	  }
	}
		//  If not alphanum do nothing.
// return object at end
return hash;
// return an object with keys that are lowercase alphanumeric characters and values that are count of the times they appeared.

}
