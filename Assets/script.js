


// Work Day Scheduler


// functionality for saving notes //
// listen for a save button ~
// grab whatever was typed in the text area ~
// then save it to local storage ~

// functionality for geting previous values //
// get the value from local storage ~
// and then give the textarea the same value created from local storage ~

// functionality for time row colors //
// compare the current time with time displayed in each block
// do this with moment.js
// set up variables equal to the time of day using moment.js
// loop over the blocks
// compare block time to current time

// if time is less than or equal too current time then we change color to gray
// else if  current time is same change bg color to red
// else turn the future rows to green


// use moment to grab day and display it



var saveButton1 = document.getElementById("button1");
var descInput1 = document.getElementById("description1");
var time = document.getElementById("currentDay");

//calls to display last inputted text
renderLastRegistered();

// current time
var now = setInterval (function() {
    var time = moment().format("MMM Do YYYY, h:mm:ss");
    $("#currentDay").text("Today is: " + time);
},1000) 

//displays current time using moment.js

// retrieves last inputted text and displays it
function renderLastRegistered() {

    var nine = localStorage.getItem("desc1"); 
    descInput1.textContent = nine;

};

// actually gets the text put into local storage
function saveText1(){
    
var nine = document.querySelector("#description1").value;
localStorage.setItem("desc1", nine);

renderLastRegistered();
console.log(nine);
};


// on click using jquery
$(saveButton1).click(saveText1);






