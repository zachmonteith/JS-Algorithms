function CrAzYcAsE(strin){
    //takes a string of any length and alternates between upper and lower case letters for the purposes of silly memes
    //establish return variable, of type string
 var crazy = "";
    //loop over string
    for(var i = 0; i < strin.length; i++){
        let char = strin[i];
        //use modulo to determine if index is even
        if ( i % 2 == 0 ) {
            char = char.toUpperCase();
            crazy = crazy.concat(char);
        } else {
            char = char.toLowerCase();
            crazy = crazy.concat(char);

        }
    }
    return crazy;

}
