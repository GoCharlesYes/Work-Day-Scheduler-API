// Creating function for time on webpage
function mainTime() {
    console.log("maintime")
    let clockNow = moment();
    // Using jQuery and moment.js to call #currentday id and add text and format it into appropriate format
    $("#currentDay").text(clockNow.format('MMMM Do YYYY, h:mm:ss a'));
}

mainTime();
// setting interval so time updates live every 1000ms/1sec
setInterval(mainTime, 1000);

// Elements for targeting classes and id's
let maincontainer = $(".container");
let saveButton = $(".save-icon");
let time9am = $("#9-AM");
let time10am = $("#10-AM");
let time11am = $("#11-AM");
let time12pm = $("#12-PM");
let time1pm = $("#1-PM");
let time2pm = $("#2-PM");
let time3pm = $("#3-PM");
let time4pm = $("#4-PM");
let time5pm = $("#5-PM");

// Creating array for for-loop function
let timeSchedule = [
    time9am,
    time10am,
    time11am,
    time12pm,
    time1pm,
    time2pm,
    time3pm,
    time4pm,
    time5pm,
];

// Colour code for timeblocks: past, present, and future
// Hour format kk
let timeblockElHour = moment().format("kk");
// For-loop
for (let i = 0; i < timeSchedule.length; i++) {
    timeSchedule[i].removeClass("past present future");

    if (timeblockElHour > timeSchedule[i].data("hour")) {
        timeSchedule[i].addClass("past");
    } else if (
        timeblockElHour === timeSchedule[i].attr("data-hour")) {
            timeSchedule[i].addClass("present");
        } else {
            timeSchedule[i].addClass("future");
        }
}

// save to local storage
function localSave() {
    for (let el of timeblockElHour) {
        el.val(localStorage.getItem("time block" + el.data("hour")));
    }
}

// function for handling clicks
function formClick(event) {
    event.preventDefault();

    let btnClick = $(event.currentTarget);

    let targetText = btnClick.siblings("textarea");
 
    let targetTimeBlock = targetText.data("hour");

    localStorage.setItem("time block" +  targetTimeBlock, targetText.val());
}

saveButton.on("click", formClick);
