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