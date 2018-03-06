/*

Make sure to include these two lines in your HTML header:

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="FILENAME-GOES-HERE.js"></script>

For inline comments on functionality, please see HTML document.

*/

$(document).ready(function(){
  $('img').click(function(){
    if($(this).attr('src') == $(this).attr('data-src-copy'))
    {
      $(this).attr('src',$(this).attr('data-alt-src'));
    }
    else
    {
      $(this).attr('src',$(this).attr('data-src-copy'));
    }
  });
});
