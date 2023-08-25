// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//THREEE DOM RELATIONSHIPS : PARENT CHILD SIBLING

$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY, h:m a' ));
  
  //used the added timeslots ID to loop thru childern div hours in function below
  $('#timeslots > div').each(function(){
    //set to only go by the hour so that it plays nice with function below which slices to pull the hour from html code
    var currentHour = dayjs().hour();
    //this should remove the hour- from each ID, to turn it into an integer so it can be compared for if statement below
    var hourBlock = $(this).attr('id').slice(5);
    
    //if statement should remove old classes and update classes which will color according to css.
      if (hourBlock < currentHour) {
        $(this).removeClass('present future').addClass('past');} 
        else if (hourBlock === currentHour) {
        $(this).removeClass('past future').addClass('present');} 
        else {
        $(this).removeClass('past present').addClass('future');}


        //CODE ABOVE HERE NOW WORKS AND CALENDAR IS NOW FUNCTIONING. ON TO LOCAL STORAGE
      
        
        //create variables using eq to grab the second and third children from our div
        var button = $(this).children().eq(2);;
        var textarea = $(this).children().eq(1);;
      
        //now that below is saved to local storage. added above for main function
        //here we get item from local storage using our key hourBlock. We then use that key to return the value previously saved
        var savedText = localStorage.getItem(hourBlock);
        textarea.val(savedText);
      
//hourBlock variable which was defined above is the key to local storage. textValue is user entered and goes to storage
//will later user this hourblock and put it into the main function so that it auto populates when the page is refreshed
button.on('click', function() {
  var textValue = textarea.val();
  localStorage.setItem(hourBlock, textValue);


});});

});





  //I want to create a loop function that goes thru each of the hour blocks in HTML.
    //From there I want it to compare each block with an if statement.
    //If blocktime=== current dayjs time 1 color
    //Else if its > this color or < a different color
    
    //Parse by hour ID. then compare to dayjs time. from there add attributes on the if/else statements
    
  //save to Storage
  //add listener (onclick) to a button
  // key, value
//go from button to parent and get key
// go from parent (we already there) to second child and get value (using jquery)
//save to stroage using key value


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
