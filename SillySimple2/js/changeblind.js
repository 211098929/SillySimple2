sliderInt=1;
count = $("#blindimages >img").size();
$(document).ready(function(){
	$("#blindimages > img#1").fadeIn(600);
});
function nextBlind(){
		count = $("#blindimages >img").size();
		sliderInt += 1;
		if(sliderInt <= count){
			$("#blindimages >img").fadeOut(600);
			$("#blindimages >img#" + sliderInt).fadeIn(600);
		}
		else
		{
			alert("No more images");
		}
	}
function prevBlind(){
		sliderInt  = sliderInt - 1;
		if(sliderInt > 0)
		{
			$("#blindimages >img").fadeOut(600);
			$("#blindimages >img#" + sliderInt).fadeIn(600);
		}
		else{
			alert("No more images");
		}
	}