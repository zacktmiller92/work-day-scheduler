//variables 
var calEnter = $("#cal-enter");
// display today's date

$("#currentDay").text(moment().format("dddd, MMM Do YYYY"))


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

