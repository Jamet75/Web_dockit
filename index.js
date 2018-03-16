// $(function SubmitForm(){
//
//   var $orders = $('#orders');
//   var $firstname = $('#firstname');
//   var $lastname = $('#lastname');
//   var $login = $('#login');
//   var $phone = $('#phone');
//   var $birthday = $('#birthday');
//
//
// $.ajax({
//   type: "GET",
//   url: 'http://163.5.84.234/api/user/all',
//
//   success: function() {
//     // $.each(orders, function(i, order) {
//     //   $orders.apprend('<li>name' + order.firstname + ', drink' + order.lastname + '</li>');
//     // };
//     alert("ça marche");
//   },
//   error: function() {
//     alert('LOOOOL');
//   }
// });

  // $.ajax({
  //   type: "POST",
  //   url: 'http://163.5.84.234/api/user/all',
  //   data, orders,
  //
  //   success: function(neworders) {
  //     $orders.apprend('<li>name' + neworder.name + ', drink' + neworder.drink + '</li>');
  //   },
  //   error: function() {
  //     alert('LOOOOL');
  //   }
  // });
// })

function ajaxGet() {
   var req = new XMLHttpRequest();
   req.open("GET", "http://163.5.84.234/api/user/all");
   req.setRequestHeader('Access-Control-Allow-Origin', '*');
   req.setRequestHeader('Access-Control-Allow-Headers', '*');
   req.setRequestHeader('Content-Type', 'application/json');
   req.addEventListener("load", function () {
       if (req.status >= 200 && req.status < 400) {
         console.log("IN")
       } else {
           console.error(req.status + " " + req.statusText + " " + url);
       }
   });
   req.addEventListener("error", function () {
   });
   req.send(null);
}
