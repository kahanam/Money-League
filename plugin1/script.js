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

  //Validate form
  $(function(){

      $("#form").validate({
        errorPlacement: function(error, element){
          error.appendTo(element.parent());
        },

        success: function(label) {
          label.parent().removeClass("error-parent");
        },

        highlight: function(element, errorClass){
          $(element).parent().addClass("error-parent");
          $(element).parent().find(".error").fadeOut(function(){
              $(this).fadeIn();
            });
        },

        rules:{
          name: {
            required: true,
            minlength:2
          },
          phone: {
            required: true,
            minlength: 10
          },
          email: {
            required: true,
            email: true
          },
          card: {
            required: true,
            minlength: 16,
            maxlength: 16
          },
          instructions: {
            required: true,
          },
          tickets: {
            required: true,
          },
          section: {
            required: true,
          },
          game: {
            required: true,
          },
          player: {
            required: true,
            minlength: 2
          },
          returningcustomer: {
            required: true,
          },
        },
        messages: {
          name: {
            required: "Please enter your name.",
            minlength: "Your username must consist of at least 2 characters"
          },
          phone: {
            required: "Please enter your phone number.",
            minlength: "Your phone number must be a full 10 digit number"
          },
          email: {
            required: "Please enter a valid email.",
          },
          card: {
            required: "Please enter your credit card number.",
            minlength: "Please enter valid 16 digit credit card number.",
            maxlength: "Please enter valid 16 digit credit card number."
          },
          instructions: {
            required: "Please enter any additional instructions. If none, put n/a.",
          },
          tickets: {
            required: "Please choose how many tickets you need.",
          },
          section: {
            required: "Please choose which section you want.",
          },
          game: {
            required: "Please choose a game you would like tickets for.",
          },
          player: {
            required: "Please pick at least two of your favorite players",
            minlength: "Please pick at least 2"
          },
        }
      });
  });

});
