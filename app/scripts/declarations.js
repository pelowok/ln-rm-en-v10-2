'use strict';

//scripted by pelowok 9/2/2015

var MNIZ = MNIZ || [];

// We define a function that takes one parameter named $.
var Declarations = (function ($) {

  // declare a variable that will be returned when the function runs.
  // This pub variable will be attached as a property to the prototype
  // named PrototypeName in: var PrototypeName = $(function){...});
  // After that, the pub.properties are available as PrototypeName.property
  var pub = {};

  var init = function () {

    console.log('declarations-init');

    MNIZ.foo1 = function(callback){

      return callback + ' : potato';

    };

    MNIZ.foo2 = [1, 'shoes', 22/3];
    MNIZ.foo3 = 'foo3';
    MNIZ.foo4 = 'foo4';

  };

  var globalcall = function(callback){

    alert(callback);

    return callback;

  }

  pub.init = init;
  pub.globalcall = globalcall;

  return pub;

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));




$( window ).load(function() {

  console.log( "declarations-window loaded" );

  console.log(MNIZ);

});

// Shorthand for: $( document ).ready(function(){...});
$(function() {

  console.log("declarations-document loaded");

  Declarations.init();

});
