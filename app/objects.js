exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	    obj.fn = fn;
  	    return obj.fn();
  },

  alterObjects : function(constructor, greeting) {
    // Optional Challenge
  },

  iterate : function(obj) {
    // Optional Challenge
  }
};
