//'use strict';

//scripted by pelowok 9/2/2015

var MNIZ = MNIZ || [];

// We define a function that takes one parameter named $.
var Test2 = (function ($) {


  var pub = {};

  var init = function () {
    console.log('init2');
  }

  var final = function () {
    console.log(MNIZ.potato);
  }

  MNIZ.potato2 = 'potato2';

  pub.init = init;

  return pub;

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));




$( window ).load(function() {

  console.log( "window2 loaded" );

  console.log(MNIZ.potato1);

});

// Shorthand for $( document ).ready()
$(function() {

  console.log("document2 loaded2");

});

$( document ).ready(function() {

  console.log( "document2 loaded" );

  Test2.init();

});
