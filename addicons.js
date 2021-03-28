// changing the icons on the cate++ pages


// if on main page
var logoURL = chrome.extension.getURL("icons/mainpage_logo.png");
var rightArrowURL = chrome.extension.getURL("icons/mainpage_arraow_right.png");
var infoURL = chrome.extension.getURL("icons/info.png");
var downArrowURL = chrome.extension.getURL("icons/mainpage_arraow_down.png");
var gradingURL = chrome.extension.getURL("icons/mainpage_grading.png");
var lateURL = chrome.extension.getURL("icons/mainpage_late.png");
var emailURL = chrome.extension.getURL("icons/email.png");
var rightArrowSingleURL = chrome.extension.getURL("icons/timetable_arrow_right_single.png");
var rightArrowDoubleURL = chrome.extension.getURL("icons/timetable_arrow_right_double.png");
var leftArrowSingleURL = chrome.extension.getURL("icons/timetable_arrow_left_single.png");
var leftArrowDoubleURL = chrome.extension.getURL("icons/timetable_arrow_left_double.png");
var adminURL = chrome.extension.getURL("icons/admin.png");

// change favicon
$("head").find("link").filter(function(){
    return $(this).attr("href") == "icons/favcate3.gif";
}).attr("href", logoURL);

var title = $('title').text();

function replaceImage(oldSrc, newSrc, height){
    $("img").filter(function(){
        return $(this).attr("src") == oldSrc;
    }).attr("src", newSrc).height(height);
}

// timetable
if (title.includes("Timetable")) {

    replaceImage("icons/arrowright.gif", rightArrowSingleURL, 20);
    replaceImage("icons/arrowleft.gif", leftArrowSingleURL, 20);
    replaceImage("icons/arrowredright.gif", rightArrowURL, 20);
    replaceImage("icons/info.gif", infoURL, 20);

    $("img").filter(function(){
        var src = $(this).attr("src");
        return (src == "icons/deadline_small.gif") || (src == "icons/tests_small.gif");
    }).attr("src", rightArrowSingleURL).height(20);
}

// grading scheme
if (title.includes("Grading Scheme")) {
    $("td").find("img").eq(0).attr("src",logoURL).height(84);
}

// projects portal
if (title.includes("Projects Portal")) {
    
    replaceImage("icons/info.gif", infoURL, 20);
    replaceImage("icons/admin.gif", adminURL, 20);
}


