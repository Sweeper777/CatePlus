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

//mainpage
if ($('title').text().substring(0,4) == "CATe") {
    
    //logo
    $("body > form > table > tbody > tr:nth-child(1) > td:nth-child(1) > h2 > img").attr("src",logoURL).height(20);

    //left "right arrow"
    $("body > form > table > tbody > tr:nth-child(2) > td:nth-child(1) > ul:nth-child(2) > img").attr("src",rightArrowURL).height(20);

    //left info
    $("body > form > table > tbody > tr:nth-child(2) > td:nth-child(1) > ul:nth-child(2) > a > img").attr("src",infoURL).height(20);

    
    //mainpage left table arrow
    $("body > form > table > tbody > tr:nth-child(2) > td:nth-child(1) > ul:nth-child(3) > form > table > tbody > tr > td:nth-child(3) > table > tbody > tr > td > table > tbody > tr:nth-child(1) > th > img").attr("src",downArrowURL).height(15);
    //mainpage first right down arrow
    $("body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > ul > table > tbody > tr:nth-child(1) > th:nth-child(3) > img").attr("src",downArrowURL).height(15);
    //mainpage second right down arrow
    $("body > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > ul > table > tbody > tr:nth-child(1) > th:nth-child(3) > img").attr("src",downArrowURL).height(15);
    
    //right grading icon
    $("body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > ul > table > tbody > tr:nth-child(3) > td:nth-child(3) > a > img").attr("src", gradingURL).height(28);
    
    //right late icon
    $("body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > ul > table > tbody > tr:nth-child(4) > td:nth-child(3) > a > img").attr("src", lateURL).height(12);

    //right email icon
    $("body > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > ul > table > tbody > tr:nth-child(2) > td:nth-child(3) > font > a > img").attr("src",emailURL).height(30);

}

if ($('title').text().includes("Timetable")) {
    //left -1 period
    $("body > center > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(1) > a > img").attr("src",leftArrowSingleURL).height(20);

    //left -2 period
    $("body > center > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1) > img").attr("src",leftArrowSingleURL).height(20);
    $("body > center > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(1) > a:nth-child(2) > img").attr("src",leftArrowSingleURL).height(20);

    //right +1 period
    $("body > center > table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(2) > a > img").attr("src",rightArrowSingleURL).height(20);
    
    //right +2 period
    $("body > center > table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2) > a:nth-child(2) > img").attr("src",rightArrowSingleURL).height(20);
    $("body > center > table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2) > a:nth-child(1) > img").attr("src",rightArrowSingleURL).height(20);

    //right arrow
    $("body > center > ul > img").attr("src",rightArrowURL).height(20);

    //info
    $("body > center > ul > a > img").attr("src",infoURL).height(20);


}
