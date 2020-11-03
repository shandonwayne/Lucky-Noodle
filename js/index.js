document.getElementById("hours-change").addEventListener("change", hoursChart);

function hoursChart() {
	console.log(this.value);
	var chart = document.getElementById("charts");

if (this.value === "monday"){
	 $('.chart-0').show();
	 $('.chart-1').hide();
	 $('.chart-2').hide();
	 $('.chart-3').hide();
}
	
if (this.value === "tuesday"){
	 $('.chart-2').show();
	 $('.chart-0').hide();
	 $('.chart-1').hide();
	 $('.chart-3').hide();
}

if (this.value === "wednesday"){
	 $('.chart-1').show();
	$('.chart-0').hide();
	 $('.chart-2').hide();
	 $('.chart-3').hide();
}
	
if (this.value === "thursday"){
	 $('.chart-3').show();
	$('.chart-0').hide();
	 $('.chart-1').hide();
	 $('.chart-2').hide();
}

if (this.value === "friday"){
	 $('.chart-2').show();
	$('.chart-0').hide();
	 $('.chart-1').hide();
	 $('.chart-3').hide();
}

if (this.value === "saturday"){
	 $('.chart-2').show();
	$('.chart-0').hide();
	 $('.chart-1').hide();
	 $('.chart-3').hide();
}
	
if (this.value === "sunday"){
	 $('.chart-1').show();
	$('.chart-0').hide();
	 $('.chart-2').hide();
	 $('.chart-3').hide();
}
	
}