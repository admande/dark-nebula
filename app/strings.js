exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    newStrArr = [];
    str.split('');
    for(var i = 0; i < str.length; i++){
      if(str[i] != newStrArr[newStrArr.length -1]){
        newStrArr.push(str[i]);
      }else if(str[i] != newStrArr[newStrArr.length - amount]){
        newStrArr.push(str[i]);
      }
    }
    return newStrArr.join('')
  },
  wordWrap: function(str, cols) {
    var counter = 0;
    resultString = '';
    splitArray = str.split(' ');
    for(var i = 0; i < splitArray.length; i++){
      if(i !==splitArray.length -1) {
        if(splitArray[i].length + splitArray[i+1].length + counter < cols){
          counter += splitArray[i].length;
          resultString += splitArray[i] + " ";
        }else {
          resultString += splitArray[i] + "\n";
          counter = 0;
        }}
      else {resultString += splitArray[i];}
    }
      return resultString;

  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
['abc', 'dfds', 'dsfdfs']
