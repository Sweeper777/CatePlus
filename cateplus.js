
// on main page

// extract necessary information

let texts = $('b').slice(0,9);

// texts.each(function(){
// 	console.log($(this).html());
// });


// naive way to change all black and blue to white and pink

var blackText = $('*').filter(function(){
	return ($(this).css("color") == "rgb(0, 0, 0)");
});
$(blackText).css("color", "#ffffff");

var blueText = $('*').filter(function(){
	return ($(this).css("color") == "rgb(0, 0, 255)");
});
$(blueText).css("color", "#F391B1");

var blueAccents = $('*').filter(function(){
	return ($(this).css("boder-color") == "rgb(0, 0, 255)");
});
$(blueAccents).css("border-color", "#bb86fc");