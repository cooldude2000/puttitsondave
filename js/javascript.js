$("document").ready(function()	{
	$("img.titsPic").hide();
	$("img.beardPic").hide();
	$("img.lasersPic").hide();
	$("img.fangsPic").hide();

	$(".beard").click(function(event)	{
		$("img.beardPic").toggle("pulsate");
	});

	$(".tits").click(function(event)	{
		$("img.titsPic").toggle("pulsate");
	});

	$(".fangs").click(function(event)	{
		$("img.fangsPic").toggle("pulsate");
	});

	$(".lasers").click(function(event)	{
		$("img.lasersPic").toggle("pulsate");
	});
});