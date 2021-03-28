
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

changeColor("td", "background-color", "rgb(255, 255, 255)", "#0D998B")
changeColor("td", "background-color", "rgb(255, 255, 0)", "#585550")