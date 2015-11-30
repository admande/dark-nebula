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
    var match = /\d{3}/.exec(str)
	    if (match) {
	      return match[0];
	    } else {
	      return false
	    }
	  },

  matchesPattern : function(str) {
    return /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/.test(str)
  },

  isUSD : function(str) {
    return /^\$[0-9]{1,3}(?:,?[0-9]{3})*(\.[0-9]{2})?$/.test(str);
  }
};
