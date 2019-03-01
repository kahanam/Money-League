$(document).ready(function(){
  //set the document to a variable
  var elDoc = document.documentElement;
  //if javascript is turned on then this script will remove no-js class
  elDoc.className = elDoc.className.replace(/(^|\s)no-js(\s|$)/, '$1')
  //Show info in the console
  console.group('Welcome');
    console.log('%cHi', 'color:#264e36; font-size:30px; font-weight:bold;');
    console.log('%cjQuery version:', 'color:#DAD3AF; font-size:30px; font-weight:bold;', $.fn.jquery);
  console.groupEnd();
});
