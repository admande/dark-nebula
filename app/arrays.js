exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length + 3; i++) {
      if(arr[i] === item) {arr.splice(i, 1);
        i = 0
      }
    }
      return arr
    },


  append : function(arr, item) {
    arr.push(item);
    return arr
  },

  truncate : function(arr) {
    arr.pop();
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail : function(arr) {
    arr.splice(0, 1)
    return arr
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr
  },

  count : function(arr, item) {
    var counter = 0
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {counter += 1}
    }
    return counter
  },

  duplicates : function(arr) {
    results = []
    arr.sort();
    for (var i = 0; i <= arr.length-1; i++) {
      if(arr[i] == arr[i + 1]){
          results.push(arr[i]);
      }
      if(results[results.length - 2] == arr[i]){
        results.splice(results.length-1,1);
      }
      }
    return results
  },

  square : function(arr) {
    return arr.map(function (x) {
      return Math.pow(x, 2);
    });
  },

  findAllOccurrences : function(arr, target) {
    indexArray = []
    for(i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        indexArray.push(i);
      }
    }
    return indexArray
  }
};
