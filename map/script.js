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


window.onload = getLocation;
var msg = "Sorry, can't get your location.";
var mapdiv = document.getElementById('map');

function getLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var pinLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 15,
        center: pinLocation,
        zoomControl: true,
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":"-20"},{"color":"#a28bb5"},{"lightness":"50"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#a28bb5"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"lightness":"10"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"lightness":"-40"},{"weight":1.2}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#7d7992"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#2e2a43"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":"-20"},{"saturation":"20"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#332f48"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":"-25"},{"saturation":"20"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#332f48"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#43704f"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#46425b"},{"lightness":"-35"},{"saturation":"20"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#a28bb5"},{"lightness":"-35"},{"saturation":"20"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#2e2a43"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#a28bb5"},{"lightness":"-35"},{"saturation":"20"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#46425b"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#24253b"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#8b87a0"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"color":"#29253d"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#507a9e"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#242835"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#507a9e"}]}]


      };
      var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

      var startPosition = new google.maps.Marker({
        position: pinLocation,
        map: venueMap,
        icon: "../assets/icon.png"
      });
    });


  } else{
    mapdiv.textContent = msg;
  }
}
