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