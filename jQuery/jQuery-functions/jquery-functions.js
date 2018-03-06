/*

Make sure to include these two lines in your HTML header:

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="FILENAME-GOES-HERE.js"></script>

For inline comments on functionality, please see HTML document.

*/

$(document).ready(function(){
  var myText = "Hello, world!";
  $("#row1-button").click(function(){
    alert(myText);
  })
  $("#row2-button").click(function(){
    $("#row2").hide()
  })
  $("#row3-button").click(function(){
    $("#row2").show()
  })
  $("#row4-button").click(function(){
    $("#row2").toggle()
  })
  $("#row5-button").click(function(){
    $("#row5-headline").slideDown()
  })
  $("#row6-button").click(function(){
    $("#row6-headline").slideUp()
  })
  $("#row7-button").click(function(){
    $("#row7-headline").slideToggle()
  })
  $("#row8-button").click(function(){
    $("#row8-summary").fadeIn()
  })
  $("#row9-button").click(function(){
    if ( $( "#row9-headline" ).is( ":hidden" ) )
    {
      $("#row9-headline").fadeIn( "slow" );
    } else
    {
      $( "#row9-headline" ).fadeOut( "slow" );
    }
  })
  $("#row10-button-1").click(function(){
    $("#row10-summary").addClass("blue-text")
  })
  $("#row10-button-2").click(function(){
    $("#row10-summary").addClass("red-background-color")
  })
  $("#row10-button-3").click(function(){
    $("#row10-summary").addClass("blue-text red-background-color")
  })
  $("#row10-button-4").click(function(){
    if ($("#row10-summary").hasClass("blue-text"))
    {
      $("#row10-summary").removeClass("blue-text red-background-color");
    }
    if ($("#row10-summary").hasClass("red-background-color"))
    {
      $("#row10-summary").removeClass("red-background-color");
    }
  })
  $("#row11-button").click(function(){
    var myEmail = "max.wiederholt@gmail.com"
    $("#row11-summary").before(myEmail);
  })
  $("#row12-button").click(function(){
    $("#row12-summary").after("max.wiederholt@gmail.com")
  })
  var counter = 0;
  $("#row13-button").click(function(){
    $("#row13-summary").append(" " + counter);
    counter++;
  })
  $("#row14-button").click(function(){
    var array = $("#row14-content").html();
    alert(array);
  })
  /* when the checkbox changes, alert the user of the new property value

  The change event is sent to an element when its value changes. This event is limited to <input> elements, <textarea> boxes and <select> elements

  */
  // $("#row15-checkbox").change(function(){
  //
  //
  // })
  $("#row16-button-count").click(function(){
    $("#row16-summary").append(" " + counter);
    counter++;
  })
  // The .val() method is primarily used to get the values of form elements such as input, select and textarea. When called on an empty collection, it returns undefined.

  // THIS ONLY WORKS FOR FORMS. No use case at this time.

  // $("#row16-button-alert").click(function(){
  //   var alert = $("#row16-summary").val(counter);
  // })
  $("#row17-button").click(function(){
    $("#row17-summary").append(" hello");
  })
  $("#row17-button-alert").click(function(){
    alert($("#row17-summary").text());
  })
  /* To safely set values on DOM objects without memory leaks, use .data(). */
  $("#row18-button").click(function(){
    $("#row18-summary").data("user-info", {first_name: "Max", last_name: "Wiederholt"});
    $("#first-name").text($("#row18-summary").data("user-info").first_name);
    $("#last-name").text($("#row18-summary").data("user-info").last_name);
  })
});
