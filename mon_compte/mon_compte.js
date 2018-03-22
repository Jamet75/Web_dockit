$(document).ready(function() {
	$('.nav-trigger').click(function() {
		$('.side-nav').toggleClass('visible');
	});
});

function	getInfoUser() {
	document.getElementById("Username").innerHTML = localStorage.getItem("firstname");
	document.getElementById("Login").innerHTML = localStorage.getItem("login");

}
