
// if on main page
var title = $('title').text();

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

if (title.substring(title.length - 9) == "Timetable") {

	// assign classes for each group

	const unassessed = retrieveMatchingCSS("td", "background-color", "rgb(255, 255, 255)");
	$(unassessed).addClass("unassessed");

	const unassessedRequired = retrieveMatchingCSS("td", "background-color", "rgb(205, 205, 205)");
	$(unassessedRequired).addClass("unassessedRequired");

	const assessedIndividual = retrieveMatchingCSS("td", "background-color", "rgb(204, 255, 204)");
	$(assessedIndividual).addClass("assessedIndividual");

	const assessedGroup = retrieveMatchingCSS("td", "background-color", "rgb(240, 204, 240)");
	$(assessedGroup).addClass("assessedGroup");


	// make lines pink
	
	$('td').filter(function(){
		return ($(this).css("background-color") == "rgb(142, 249, 249)");
	}).css("background-color", "#F39DBA");

}


// naive way to change all black and blue to white and pink

function retrieveMatchingCSS(targets, attr, oldValue){
	return $(targets).filter(function(){
		return ($(this).css(attr) == oldValue);
	});
}

function changeColor(attr, oldColor, newColor) {
	$(retrieveMatchingCSS("*", attr, oldColor)).css(attr, newColor);
}

// change black text to white
changeColor("color", "rgb(0, 0, 0)", "#FFFFFF");

// change blue text to pink
changeColor("color", "rgb(0, 0, 255)", "#F391B1");

// change blue accents to dark gray
changeColor("border-color", "rgb(0, 0, 255)", "#BB86FC");




