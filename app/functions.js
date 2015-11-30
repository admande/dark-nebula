exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    var iAmPrime = true;
    for(i = num-1; i > 1; i--){
      if(num % i === 0){
        iAmPrime = false;
      }
    }
    return iAmPrime;
  },

  arraySum : function(arr) {
     sumOf = 0
     for (var i = 0; i < arr.length; i++)
     {sumOf = sumOf + arr[i]}
     return sumOf
   },

  fizzBuzz : function(num) {
    if(typeof(num) === "number"){
      if(num%15 === 0){
        return "fizzbuzz";
      }else if(num%3 === 0){
        return "fizz";
      }else if(num%5 === 0){
        return "buzz";
      }
      else{
        return num;
      }
    }
  }
};
