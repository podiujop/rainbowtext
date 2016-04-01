$(document).ready(function () {

	$("#textSubmit").click(function (){

		$("#textOutput").empty();
		$("#codeOutput").empty();
		
		var inputText = $("#textInput").val();

		for (var i = 0; i < inputText.length; i++) {
			var r = Math.floor(Math.random() * 255) + 1;
			var g = Math.floor(Math.random() * 255) + 1;
			var b = Math.floor(Math.random() * 255) + 1;

			$("#textOutput").append('<span style="color: rgb(' + r + "," + g + "," + b + ')">' + inputText[i] + '</span>');
		};

		var codeText = $("#textOutput").html();
		$("#codeOutput").val(codeText);

	});

	$(".header__home-link").mouseenter(function () {

		$(this).empty();
		var homeLink = "Rainbow text generator"

		for (var i = 0; i < homeLink.length; i++) {
			var r = Math.floor(Math.random() * 255) + 1;
			var g = Math.floor(Math.random() * 255) + 1;
			var b = Math.floor(Math.random() * 255) + 1;

			$(this).append('<span style="color: rgb(' + r + "," + g + "," + b + ')">' + homeLink[i] + '</span>');
		};
	});

});