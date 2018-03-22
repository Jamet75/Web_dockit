$(document).ready(function() {
	$('.nav-trigger').click(function() {
		$('.side-nav').toggleClass('visible');
	});
});

function ajaxPost(url, callback) {
   var req = new XMLHttpRequest();
   req.open("POST", url);
   req.addEventListener("load", function () {
       if (this.status >= 200 && this.status < 400) {
         console.log("IN POST");
         callback(req.responseText);
       } else {
          console.error(req.status + " " + req.statusText + " " + url);
       }
   });
   req.addEventListener("error", function () {
     console.log("Error : " + url);
   });
   req.send(null);
}

function createNewBoat() {
	console.log("skskkskskskks");
  var longueur = document.getElementById("longueur").value;
  var largeur = document.getElementById("largeur").value;
  var tirant  = document.getElementById("tirant_eau").value;
  var immatriculation = document.getElementById("immatriculation").value;
  var boat_name = document.getElementById("boat_name").value;
	var boat_type = null;
	if (document.getElementById("radio_moteur").checked) {
		boat_type = "motorboat";
	}
	else if (document.getElementById("radio_voile").checked) {
		var boat_type = "sailboat";
	}
	console.log("longueur = " + longueur);
	console.log("boat type =" + boat_type);

  var url = "http://163.5.84.234/api/boat?length=" + longueur;
  url += "&width=" + largeur;
  url += "&draft=" + tirant;
  url += "&matriculation=" + immatriculation;
  url += "&name=" + boat_name;
  url += "&owner_id=" + localStorage.getItem("id");
  url += "&type=" + boat_type;
	url += "&access_token=" + "aaa";
  ajaxPost(url, function(response) {
    var req = JSON.parse(response);
    console.log(req.state);
  });
}
