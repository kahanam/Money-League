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


  //Create XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  //When response has loaded
  xhr.onload = function() {
    if(xhr.status === 200) {
      responseObject = JSON.parse(xhr.responseText);

    //build up string with new content
    var newContent = '';
    for (var i = 0; i < responseObject.player.length; i++){
      newContent += '<div class = "bucks">';
      newContent += '<img src= "' + responseObject.player[i].photo + '" ';
      newContent += 'alt= "' + responseObject.player[i].name + '">';
      newContent += '<p>' + responseObject.player[i].name + '<br>';
      newContent += responseObject.player[i].stats + '</p>';
      newContent += '</div>';
    }
      document.getElementById('content').innerHTML = newContent;
    }
  };

  //Prepare the request

  xhr.open('GET', 'json-data.json', true);
  //Send the request
  xhr.send(null);
});
