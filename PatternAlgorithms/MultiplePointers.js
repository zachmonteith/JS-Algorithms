//Given sorted array and target average, determine if there is a pair of values
//that when averaged equal the target

function averagePair(arr, target){
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let avg = (( arr[i] + arr[j] ) / 2 ) ;
        console.log (arr[i], arr[j], avg);
        if ( avg === target) {
            return true;
        } else if ( avg > target ) {
            j--;
        } else if (avg < target ) {
            i++;
        }
    }
    return false;
}


// for each character in first string, check second string in order.
// if character is in second string, move on to next character in first string.
// if character is NOT in second string, return false.

function isSubsequence(str1, str2) {
    let j = 0;
    let i = 0;
    while (j < str2.length) {
      if (str1[i] === str2[j]){ i++; }
    j++;
    }
 return ( i === str1.length);
}
