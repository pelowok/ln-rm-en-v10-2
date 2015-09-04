'use strict';

 //scripted by pelowok 9/2/2015

var MNIZ = MNIZ || [];

// We define a function that takes one parameter named $.
var Test = (function ($) {

  // declare a variable that will be returned when the function runs.
  // This pub variable will be attached as a property to the prototype
  // named PrototypeName in: var PrototypeName = $(function){...});
  // After that, the pub.properties are available as PrototypeName.property
  var pub = {};

  var init = function () {
    console.log('init');
  };

  MNIZ.potato1 = 'potato1';

  pub.init = init;

  return pub;

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));




$( window ).load(function() {

  console.log( "window loaded" );
  console.log(MNIZ.foo1('test.js calls for'));

});

// Shorthand for: $( document ).ready(function(){...});
$(function() {

  console.log("document loaded");

  Test.init();

});
