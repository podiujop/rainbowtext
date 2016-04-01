$(document).ready(function () {

	$("#textSubmit").click(function (){

		$("#output").empty();
		$("#codeOutput").empty();
		
		var inputText = $("#textInput").val();

		for (var i = 0; i < inputText.length; i++) {
			var r = Math.floor(Math.random() * 255) + 1;
			var g = Math.floor(Math.random() * 255) + 1;
			var b = Math.floor(Math.random() * 255) + 1;

			$(".rainbow").append('<span style="color: rgb(' + r + "," + g + "," + b + ')">' + inputText[i] + '</span>');
		};

		var codeText = $("#textOutput").html();
		$("#codeOutput").val(codeText);

	});

});