/*

Make sure to include these two lines in your HTML header:

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="FILENAME-GOES-HERE.js"></script>

For inline comments on functionality, please see HTML document.

*/

$(document).ready(function(){
  $(".obama-logo-png").click(function(){
    $(this).fadeOut();
  });
  $("#reset-button-1").click(function(){
    $('img').show();
  });
});
