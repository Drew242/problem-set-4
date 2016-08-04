var addNumbers = function(str) {
  var strA = str.split('');
  var sum  = 0;
  for ( i = 0; i < strA.length; i++ ) {
    if (strA[i] * 1 && strA[i+1] * 1) {
      sum += ((strA[i] + strA[i+1]) * 1);
      strA.shift(i) && strA.shift(i+1);
    } else if (strA[i] * 1) {
      sum += (strA[i] * 1);
    }
  }
  console.log(sum);
  return sum;
}

addNumbers('88Hello 3World');
addNumbers('55Hello');
addNumbers('5Hello 5');

var longestWord = function(str) {
  var words  = str.split(' ');
  var length = 0;
  var word   = '';

  for (i=0;i<words.length;i++) {
    if(words[i].length > length){
      length = words[i].length;
      word = words[i];
    }
  }

  console.log(`${word} === ${length}`);
  return `${word} === ${length}`;
}

longestWord("This is a sentence");
longestWord("If you're looking for a chupacabra, you're going to find a chupacabra");

var averageStringNumbers = function(str) {
  var lcount = '';
  var chars  = str.split('');
  for(i=0; i<chars.length; i++) {
    if (!parseInt(chars[i])) {
      lcount += chars[i];
    }
  }
  var lcount = lcount.replace(/\s/g,'');
  console.log(Math.round(addNumbers(str) / (lcount.length)));
}

averageStringNumbers('Hello6 9World 2, Nic8e D7ay!');
