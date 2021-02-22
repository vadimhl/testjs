/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words=s.split(' ');
  if ( pattern.length !== words.length) return false;
  const lmap = new Map();
  const wmap = new Map();
  for ( let i = 0; i < pattern.length; i++ ) {
    let letter = pattern[i];
    let word = words[i];
    let hl = lmap.has(letter);
    let hw = wmap.has(word);
    if ( (hl && !hw) || ( !hl && hw) ) return false;
    if ( hl && !( lmap.get(letter) === word && wmap.get(word) === letter ) ) {
        return false;
    }
    lmap.set(letter, word);
    wmap.set(word, letter);
  }
  return true;
};
console.log(wordPattern('abba', 'dog cat cat dog'));