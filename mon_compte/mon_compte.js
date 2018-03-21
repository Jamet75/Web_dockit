$(document).ready(function() {
	$('.nav-trigger').click(function() {
		$('.side-nav').toggleClass('visible');
	});
});

function	getInfoUser() {
	alert(localStorage.getItem("firstname"));
	document.getElementById("Username").innerHTML = localStorage.getItem("firstname");
}
