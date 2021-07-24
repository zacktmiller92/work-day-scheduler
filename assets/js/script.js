


//sets current date in jumbotron
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"))

function saveLocal () {
    var cal = []
    // loop through list of times and get data from p tags
    // add data from p tags to an object. Key = section ID, value = p tag value
    // convert to string and save to local storage
    // this should run every time the save button is clicked
    $("#cal-list li").each(function( index ) {
        var calItem = {key:"", value:""}
        calItem.key = $(this).find(".cal-enter").attr("id");
        calItem.value = $(this).find(".cal-enter p").text();
        // calItem.value = $(this).find("cal-enter p").text()
        
        cal.push(calItem);
        
    })

    localStorage.setItem("calendarData", JSON.stringify(cal))

};


function loadLocal() {
    // run on pageload so add function call to the bottom of page

    var cal = JSON.parse(localStorage.getItem("calendarData")) || []

    for (var i = 0; i < cal.length; i++) {
        $("#cal-list")
        .find("#" + cal[i].key + " p" )
        .replaceWith("<p>" + cal[i].value + "</p>")
        // console.log(cal[i].value)
    };
};

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


function saveCalendar() {
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

    // save to local storage
    saveLocal()

};


// color code blocks based on date
function calBackgroundColor () {
    $("#cal-list li").each(function(index){

        if (index + 9 < moment().hour()) {
            $(this).find(".cal-enter").addClass("past");
        }
        else if (index + 9 == moment().hour()) {
            $(this).find(".cal-enter").addClass("present");
        }
        else {
            $(this).find(".cal-enter").addClass("future");
        }

    })
    // console.log('calBackgroundColor has been called')
};






calBackgroundColor()
setInterval(calBackgroundColor, (1000 * 60 * 5));
loadLocal();

$("li .cal-enter").on("click", editCalendar)
$("li .saveBtn").on("click", saveCalendar)