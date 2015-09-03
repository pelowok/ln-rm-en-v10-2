//'use strict';

 //scripted by pelowok 9/2/2015

var MNIZ = MNIZ || [];

// We define a function that takes one parameter named $.
var Test = (function ($) {


  var pub = {};

  var init = function () {
    console.log('init');
  }

  MNIZ.potato1 = 'potato1';

  pub.init = init;

  return pub;

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));




$( window ).load(function() {

  console.log( "window loaded" );
  console.log(MNIZ.potato2);

});

// Shorthand for $( document ).ready()
$(function() {

  console.log("document loaded");

  Test.init();

});
