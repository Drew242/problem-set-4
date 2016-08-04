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
