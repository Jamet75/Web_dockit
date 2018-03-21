function ajaxGet(url, callback) {
   var req = new XMLHttpRequest();
   req.open("GET", url);
   req.addEventListener("load", function () {
       if (this.status >= 200 && this.status < 400) {
         console.log("IN");
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

function getUserInfo(id) {
  ajaxGet("http://163.5.84.234/api/user?id=" + id, function(response) {
    var rep = JSON.parse(response);
    console.log(rep.user);
  });
}

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

function createNewAccount() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var login = document.getElementById("login").value;
  var phone = document.getElementById("phone").value;
  var birthday = document.getElementById("birthday").value;
  var password = document.getElementById("password").value;

  var url = "http://163.5.84.234/api/user?firstname=" + firstname;
  url += "&lastname=" + lastname;
  url += "&login=" + login;
  url += "&password=" + password;
  url += "&phone=" + phone;
  url += "&birthday=" + birthday;
  url += "&type=boater";
  ajaxPost(url, function(response) {
    var req = JSON.parse(response);
    console.log(req.state);
  });
}

function getAllHarbors(map) {
  var url = "http://163.5.84.234/api/harbor/all";
  var harborsList = [];

  ajaxGet(url, function(response) {
    var req = JSON.parse(response);

    harborsList = req.harbors;

    var i = 0;
    while (i < harborsList.length) {
      var harbor = harborsList[i];

      var myLatLng = {lat: harbor.latitude, lng: harbor.longitude}; /* PORT MARSEILLE */

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: ''
      });
      google.maps.event.addListener(marker, 'click', function(harbor) {
        return function() {
        console.log(harbor);
        console.log(harbor.id);
        console.log(harbor.name);
        console.log(harbor.email);
        console.log(harbor.phone);
        console.log(harbor.city);
        console.log(harbor.address);
        console.log(harbor.postal);
      }}(harbor));
      i += 1;
    }
  });

  return harborsList;
}

function login() {
  var login = document.getElementById("registerLogin").value;
  var password = document.getElementById("registerPassword").value;

  var url = "http://163.5.84.234/api/user/login?login=" + login;
  url += "&password=" + password;
console.log("login");
  ajaxPost(url, function(response) {
    var req = JSON.parse(response);
    console.log(req.state);
    if (req.state == "ERROR") {
        alert("Erreur d'authentification");
    }
    else {
        var id = req.user.id;
        var firstName = req.user.first_name;
        var lastName = req.user.last_name;
        var login = req.user.login;
        var phone = req.user.phone;
        var type = req.user.type;
        var status = req.user.status;
        var createdDate = req.user.createdDate;

        localStorage.setItem("id", req.user.id);
        localStorage.setItem("firstname", req.user.first_name);
        localStorage.setItem("lastname", req.user.last_name);
        localStorage.setItem("login", req.user.login);
        localStorage.setItem("phone", req.user.phone);
        localStorage.setItem("type", req.user.type);
        localStorage.setItem("status", req.user.status);
        localStorage.setItem("createdDate", req.user.createdDate);
    }
  });
}

function send_info() {
  var Longueur = document.getElementById("Longueur").value;
  var Largeur = document.getElementById("Largeur").value;
  var Tirant  = document.getElementById("Tirant d'eau").value;
  var Largeur = document.getElementById("Largeur").value;
  var Largeur = document.getElementById("Largeur").value;

  var url = "http://163.5.84.234/api/user/login?login=" + login;
  url += "&password=" + password;
console.log("login");
  ajaxPost(url, function(response) {
    var req = JSON.parse(response);
    console.log(req.state);
    if (req.state == "ERROR") {

    }
    else {

    }
  });
}
