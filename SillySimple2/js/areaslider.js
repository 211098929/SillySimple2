sliderInt=1;
roomId = 1;
count = $("#main_area >img").size();
$(document).ready(function(){
	$("#main_area > img#1").fadeIn(600);
});
function next(){
		count = $("#main_area >img").size() - 2;
		sliderInt += 1;
		if(sliderInt <= count){
			$("#main_area >img").fadeOut(600);
			$("#main_area >img#" + sliderInt).fadeIn(600);
			setRoomID(sliderInt);
		}
		else
		{
			alert("No more images");
		}
	}
function prev(){
		sliderInt  = sliderInt - 1;
		if(sliderInt > 0)
		{
			$("#main_area >img").fadeOut(600);
			$("#main_area >img#" + sliderInt).fadeIn(600);
			setRoomID(sliderInt);
		}
		else{
			alert("No more images");
		}
	}
function setRoomID(id)
{
	roomId = id;
}
function getRoomID()
{
	return roomId;
}