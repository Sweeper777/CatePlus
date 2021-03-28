chrome.storage.sync.get(["openSpecInNewTab"], result => {
	if (result.openSpecInNewTab) {
		$("a[title=\"View exercise specification\"]").attr("target", "_blank");
	}
})

$("tr:nth-child(n+8) > td:nth-child(n+3) > a").parent().addClass("hoverableCell");

$("body").append("<div id=\"vert-rule\"></div>");

// $("b").on("mouseenter", () => {
//     $("#vert-rule").css({
//         display: "block",
//         top: $(this).position().top,
//         left: $(this).position().left
//     });
// }).on("mouseleave", () => {
//     $("#vert-rule").css({
//         display: "none"
//     });
// });

// assign classes for each group

const unassessed = retrieveMatchingCSS("td", "background-color", "rgb(255, 255, 255)");
$(unassessed).addClass("unassessed");

const unassessedRequired = retrieveMatchingCSS("td", "background-color", "rgb(205, 205, 205)");
$(unassessedRequired).addClass("unassessedRequired");

const assessedIndividual = retrieveMatchingCSS("td", "background-color", "rgb(204, 255, 204)");
$(assessedIndividual).addClass("assessedIndividual");

const assessedGroup = retrieveMatchingCSS("td", "background-color", "rgb(240, 204, 240)");
$(assessedGroup).addClass("assessedGroup");

// remove misassigned classes

var falseCells = $('tr').filter(function(){
	var leadingText = $(this).find("b").find("font").html();
	return (leadingText == "Subscribed") || (leadingText == "Non-Subscribed");
}).children();

falseCells.removeClass("unassessed");
falseCells.addClass("grayCells");

// fix inconsistent colors with text and border lines

// make border pink
changeColor("td", "background-color", "rgb(142, 249, 249)", "#F39DBA");
// change td inconsistency to gray
changeColor("td", "background-color", "rgb(224, 249, 249)", "#585550");

function retrieveMatchingCSS(targets, attr, oldValue){
	return $(targets).filter(function(){
		return ($(this).css(attr) == oldValue);
	});
}

function changeColor(targets, attr, oldColor, newColor) {
	$(retrieveMatchingCSS(targets, attr, oldColor)).css(attr, newColor);
}