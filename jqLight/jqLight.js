$(document).ready(function(){
	$("#slider").on("click", function(event){toggle();
	});
});
function toggle(){
	console.log("toggle");
if($("input").prop("checked")){
		$("body").css("background-color", "black");
	  }
	  else{
		  $("body").css("background-color", "white");
	  }
} 
