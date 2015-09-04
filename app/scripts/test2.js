'use strict';

//scripted by pelowok 9/2/2015

var MNIZ = MNIZ || [];

// We define a function that takes one parameter named $.
var Test2 = (function ($) {

  // declare a variable that will be returned when the function runs.
  // This pub variable will be attached as a property to the prototype
  // named PrototypeName in: var PrototypeName = $(function){...});
  // After that, the pub.properties are available as PrototypeName.property
  var pub = {};

  var init = function () {
    console.log('init2');
  };

  var final = function () {
    console.log(MNIZ.potato);
  };

  MNIZ.potato2 = 'potato2';

  pub.init = init;

  return pub;

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));




$( window ).load(function() {

  console.log( "window2 loaded" );

  console.log(MNIZ.potato1);

});

// Shorthand for: $( document ).ready(function(){...});
$(function() {

  console.log("document2 loaded2");

  Test2.init();

});
