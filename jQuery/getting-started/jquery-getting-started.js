console.log($)

console.log($())

$('body').click(function(){
  // more code will go here
});

$(document).ready(function(){
});

/* Select the HTML element/class/id:
So in order to select all of the buttons of your web page, you type: */

$('button')

/* That's it! Now you can add all sorts of cool functional properties to your buttons. What if you want to select all buttons with class name blue? Same as CSS!: */

$('button.blue')

/*  Easy! Now, if you want to select all buttons AND elements with class blue, do the following:  */

$('button, .blue')

/* And if you want to select an HTML with an ID, here is how we do that. */

$('#red')

/* There you have the jQuery selector! */

/* An Event listener is a trigger for all the code we wish to write that involves the element we selected. The event listener for a button being clicked is the following: */

$('button').click();  //**now the document is listening on a click event for the button element!**

/* The last portion is the action we want our page to enact when this event is triggered. So what happens now? What happens when we click a button on our page? Nothing yet because we haven't coded what we want to happen! Well, let's make something happen, let's add an action. */

$('button').click(function(){
   alert("You have clicked a button!");
});

/* Certain jQuery functions can behave differently depending on whether or not you run them with parameters. To demonstrate this, let's use the following code: */


$(document).ready(function(){
  $('#myParagraph').text();
});

/* Notice that myParagraph's text will stay the same, even though we know .text() can be used to change the text value of HTML elements. This is because when we call the function .text() without a parameter, the function will behave as what is called a getter function. This function will actually return the value of the text of the paragraph called myParagraph. To illustrate this, let's run the following code: */

$(document).ready(function(){
  var myText = $('#myParagraph').text();
  alert(myText);
})

/* When you load this page now, you will see the content of myParagraph in a pop-up box on the screen. The use of the term 'getter function' means that the function gets the value of a particular item and returns it, which is why we were able to get the value of the text and assign it to the variable myText that we just made.

The other way to use the .text() function is as a setter function. You will probably find yourself using .text() in this capacity more so than as a getter. To demonstrate the use of .text() as a setter, look at the following code: */


$(document).ready(function(){
  $('button').click(function(){
    $('#myParagraph').text('see how I .text() works as a setter!');
  })
})

Study only these tags!

//  Effects (functions to do some cool animation effects)
    .hide()
    .show()
    .toggle()
    .slideUp()
    .slideDown()
    .slideToggle()
    .fadeOut()
    .fadeIn()
//  CSS (adding or removing a class for any HTML element/DOM)
    .addClass()
    .removeClass()
    .css()
//  Manipulation (retrieving or setting value or text in any HTML element)
    .after()
    .append()
    .prepend()
    .attr()
    .before()
    .html()
    .text()
    .val()
//  Events (functions to handle an event)
    .click()
    .on()
    .live() - deprecated (JQuery 1.7)
    .hover()


/* Note that for the manipulation jQuery functions, there are few distinctions to make. The functions .html() and .text() are different in a key way: .html() can be used to insert new HTML markup, meaning new HTML tags. .text() is used to get or set just the text value of an HTML element. For instance, you could use .text() to change the text of a paragraph, but if you want to put an ordered list inside of the paragraph, you need to use .html() to insert the appropriate tags into the paragraph.

Similarly, .append() and .html() do nearly the same thing; they both can alter the HTML content of the selected item. The function .append will add markup to the element in question, whereas .html() will overwrite the markup with whatever is run inside the parentheses. So keep in mind that if you want to add content, use .append(), but if you want to replace content, use .html(). */
