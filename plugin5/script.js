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


  //settings for the warpdrive plugin
  var warpSettings = {

      width: 600,
      height: 480,
      autoResize: false,
      autoResizeMinWidth: null,
      autoResizeMaxWidth: null,
      autoResizeMinHeight: null,
      autoResizeMaxHeight: null,
      addMouseControls: true,
      addTouchControls: true,
      hideContextMenu: true,
      starCount: 5000,
      starBgCount: 2222,
      starBgColor: { r:176, g:128, b:252 },
      starBgColorRangeMin: 10,
      starBgColorRangeMax: 60,
      starColor: { r:176, g:128, b:252 },
      starColorRangeMin: 50,
      starColorRangeMax: 100,
      starfieldBackgroundColor: { r:7, g:50, b:5 },
      starDirection: -1,
      starSpeed: 20,
      starSpeedMax: 150,
      starSpeedAnimationDuration: 2,
      starFov: 300,
      starFovMin: 200,
      starFovAnimationDuration: 2,
      starRotationPermission: true,
      starRotationDirection: 1,
      starRotationSpeed: 0.3,
      starRotationSpeedMax: 1.0,
      starRotationAnimationDuration: 2,
      starWarpLineLength: 2.0,
      starWarpTunnelDiameter: 200,
      starFollowMouseSensitivity: 0.025,
      starFollowMouseXAxis: true,
      starFollowMouseYAxis: true

  };
  var warpdrive = new WarpDrive( document.getElementById( 'contain' ), warpSettings );

});
