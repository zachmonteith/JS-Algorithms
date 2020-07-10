function kmpStringSearch(text, pattern){
  if (pattern.length === 0) return 0;
  let count = 0;
  let helper = [];
  let i = 1;
  let j = 0;
  while (i < pattern.length){
    if (pattern[i] === pattern[j]){
      helper[i] = j+1;
      j++;
      i++;
    } else if (j === 0) {
      helper[i] = 0;
      i++;
    } else {
      j = helper[j-1] || 0;
    }
  }
  i = 0;
  j = 0;
  while (i < text.length){
    if (text[i] === pattern[j]){
      if (j === pattern.length - 1) count++;
      j++;
      i++;
    } else if (j > 0) {
      j = helper[j-1] || 0;
    } else i++;
  }
    return count;
}
