function kmpStringSearch(text, pattern){
  if (pattern.length === 0) return 0;
  let count = 0;
  let helper = [0];
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

function buildPatternArray(string){
  var pattern = [0];
  var prefidx = 0;
  var sufidx = 1;
  while (sufidx < string.length){
    if (string[prefidx] === string[sufidx]){
      pattern[sufidx] = prefidx+1;
      prefidx++;
      sufidx++;
    } else if (prefidx === 0) {
      pattern[sufidx] = 0;
      sufidx++;
    } else {
      prefidx = pattern[prefidx-1] || 0;
    }
  }
  return pattern;
}

function knuthMorrisPratt(text, string, t=0, s=0) {
  var count = 0;
  const pattern = buildPatternArray(string);
  while (t < text.length){
    if (text[t] === string[s]){
      if (s === string.length - 1) count++;
      t++;
      s++;
    } else if (s > 0) {
      s = pattern[s-1] || 0;
    } else t++;
  }
  return count;
}
