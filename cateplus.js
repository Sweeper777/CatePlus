
// if on main page

if ($('title').text().substring(0,4) == "CATe") {
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

	// the appropriate time-table link:
	const timetableLink = "https://cate.doc.ic.ac.uk/timetable.cgi?keyt=" + year + ":" + timetablePeriod + ":j1:" + login;
	// console.log(timetableLink)

	// for tony: use this info for your afterwards.js
}


// naive way to change all black and blue to white and pink

function changeColor(attr, oldColor, newColor) {
	$('*').filter(function(){
		return ($(this).css(attr) == oldColor)
	}).css(attr, newColor);
}

// change black text to white
changeColor("color", "rgb(0, 0, 0)", "#FFFFFF");

// change blue text to pink
changeColor("color", "rgb(0, 0, 255)", "#F391B1");

// change blue accents to dark gray
changeColor("border-color", "rgb(0, 0, 255)", "#BB86FC");

chrome.storage.sync.get(["openSpecInNewTab"], result => {
	if (result.openSpecInNewTab) {
		$("a[title=\"View exercise specification\"]").attr("target", "_blank");
	}
})
