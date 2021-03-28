
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


