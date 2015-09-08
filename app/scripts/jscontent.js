'use strict';

//scripted by pelowok 9/7/2015

var MNIZ = MNIZ || [];

// We define a function that takes one parameter named $.
var Jscontent = (function ($) {

  // declare a variable that will be returned when the function runs.
  // This pub variable will be attached as a property to the prototype
  // named PrototypeName in: var PrototypeName = $(function){...});
  // After that, the pub.properties are available as PrototypeName.property
  var pub = {};

  var init = function () {
    // do stuff
  };

  pub.init = init;

  // Declare any namespace variable to namespace
  //MNIZ.variablename = variableValue;

  return pub;

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));


// Shorthand for: $( document ).ready(function(){...});
$(function() {

  console.log("Jscontent loaded");

  Jscontent.init();

});
