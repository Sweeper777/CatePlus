
var title = $('title').text();

// if on main page
if (title.substring(0,4) == "CATe") {
	// extract necessary information

	let texts = $('b').slice(0,9);

	const name = $(texts[0]).text();
	const login = $(texts[1]).text();
	const cid = $(texts[2]).text();
	const status = $(texts[3]).text();
	const dept = $(texts[4]).text();
	const category = $(texts[5]).text();
	const email = $(texts[6]).text();
	const pTutor = $(texts[7]).text();
	const timetablePeriod = $($(texts[8]).parent().parent().parent().find(":first-child")[1]).val();
	const year = $('font').slice(0).html().substring(0,4);
	const moduleCode = category.split(" ")[3];

	// the appropriate time-table link:
	const timetableLink = "https://cate.doc.ic.ac.uk/timetable.cgi?keyt=" + year + ":" + timetablePeriod + ":" + moduleCode + ":" + login;
	// console.log(timetableLink)

	// for tony: use this info for your afterwards.js
}

// if on timetable
if (title.substring(title.length - 9) == "Timetable") {
	$.getScript("timetable.js");
}


// naive way to change colors;

function retrieveMatchingCSS(targets, attr, oldValue){
	return $(targets).filter(function(){
		return ($(this).css(attr) == oldValue);
	});
}

function changeColor(targets, attr, oldColor, newColor) {
	$(retrieveMatchingCSS(targets, attr, oldColor)).css(attr, newColor);
}

// switch css color palette

// change black text to white
changeColor("*", "color", "rgb(0, 0, 0)", "#FFFFFF");
// change blue text to pink
changeColor("*", "color", "rgb(0, 0, 255)", "#F391B1");
// change red/green text to purple
changeColor("*", "color", "rgb(255, 0, 0)", "#BB86FC");
changeColor("*", "color", "rgb(0, 128, 0)", "#BB86FC");
// change blue accents to dark gray
changeColor("td", "border-color", "rgb(0, 0, 255)", "#F39DBA");
// change red accents to purple
changeColor("td", "border-color", "rgb(255, 0, 0)", "#BB86FC");
changeColor("td", "background-color", "rgb(244, 173, 183)", "#403030");
// change gray accents to light gray
changeColor("td", "background-color", "rgb(221, 221, 221)", "#403030");


