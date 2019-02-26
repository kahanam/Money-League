$(document).ready(function(){
  //set the document to a variable
  var elDoc = document.documentElement;
  //if javascript is turned on then this script will remove no-js class
  elDoc.className = elDoc.className.replace(/(^|\s)no-js(\s|$)/, '$1')
  //Show info in the console
  console.group('Welcome');
    console.log('%cAaron Kahan', 'color:#264e36; font-size:30px; font-weight:bold;');
    console.log('%cjQuery version:', 'color:#DAD3AF; font-size:30px; font-weight:bold;', $.fn.jquery);
  console.groupEnd();
});

//on window load even the twentytwenty function from the plugin is
//run on the container with the two images
$(window).on("load",function() {
  $("#container").twentytwenty({default_offset_pct: 0.8});
});
