// jshint devel:true
'use strict';



$(function() {



  function outerFunction(outerParam1) {

    var innerParam1 = 'innerParam1';

    // this inner function has access to the outer function's variables, including the parameter​
    function innerFunction(innerParam2) {

      return innerParam1 + ' : ' + outerParam1 + ' : ' + innerParam2;

    }

    return innerFunction;

  }

  var outerParam2 = outerFunction('outerParam1'); // At this juncture, the outerFunction has returned.

  // The closure (innerFunction) is called here after the outerFunction has returned above​
  // Yet, the closure still has access to the outerFunction's variables and parameter​
  console.log(outerParam2('innerParam2'));

});

