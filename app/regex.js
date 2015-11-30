exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /[0-9]/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /([a-zA-Z]).*?\1/.test(str)
  },

  endsWithVowel : function(str) {
    return /.*[aeiouAEIOU]$/.test(str)
  },

  captureThreeNumbers : function(str) {
    return /([0-9])\1\1/.test(str)
  },

  matchesPattern : function(str) {
    return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(str)
  },

  isUSD : function(str) {

  }
};
