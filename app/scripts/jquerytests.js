'use strict';

//scripted by pelowok 9/2/2015

var MNIZ = MNIZ || [];

// We define a function that takes one parameter named $.


var JqueryTests = $( document ).ready(function(){
// same as: var JqueryTests = (function ($) {

  // declare a variable that will be returned when the function runs.
  // This pub variable will be attached as a property to the prototype
  // named PrototypeName in: var PrototypeName = $(function){...});
  // After that, the pub.properties are available as PrototypeName.property
  var pub = {};

  var init = function () {

    console.log('jquerytests-init');

    //jQuery('video, object').maximage('maxcover');

  };

  pub.init = init;

  return pub;

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));


$( window ).load(function() {

  console.log( "jquerytests-window loaded" );

});

// Shorthand for: $( document ).ready(function(){...});
$(function() {

  console.log("jquerytests-document loaded");

  JqueryTests.init();
  //Declarations.globalcall('periscope up');

  $(".sb-red").click(function(){
    $(this).removeClass('sb-red');
    $(this).addClass('sb-blue');
  });

  $(".sb-blue").click(function(){
    $(this).removeClass('sb-blue');
    $(this).addClass('sb-red');
  });

});
