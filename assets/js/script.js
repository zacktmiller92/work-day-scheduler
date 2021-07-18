//variables 
var cal = []

//sets current date in jumbotron
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"))



// edit calendar when it is clicked
function editCalendar () {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(this).find("p").replaceWith(textInput);

    textInput.trigger("focus");

};


function updateCalendar() {
    // get the text from the form
    var text = $(this)
    .parent()
    .find("textarea")
    .val()
    .trim();
    console.log(text);

    // replace the form with a p tag and fill it with the text from the form
    $(this)
    .parent()
    .find("textarea")
    .replaceWith("<p>" + text + "</p>")


};


// color code blocks based on date
function calBackgroundColor () {
    $("#cal-list li").each(function(index){

        if (index + 9 < moment().hour()) {
            $(this).find("#cal-enter").addClass("past");
        }
        else if (index + 9 == moment().hour()) {
            $(this).find("#cal-enter").addClass("present");
        }
        else {
            $(this).find("#cal-enter").addClass("future");
        }

    })
    // console.log('calBackgroundColor has been called')
};






calBackgroundColor()
setInterval(calBackgroundColor, (1000 * 60 * 5));

function testFunction() {
    alert('test')
};

$("li #cal-enter").on("click", editCalendar)
$("li .saveBtn").on("click", updateCalendar)