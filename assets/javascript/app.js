


var firebaseConfig = {
    apiKey: "AIzaSyDozrrW8os6PXTut1ZpjJ6xZinOJ0DKeIQ",
    authDomain: "timesheet02-f16b2.firebaseapp.com",
    databaseURL: "https://timesheet02-f16b2.firebaseio.com",
    projectId: "timesheet02-f16b2",
    storageBucket: "",
    messagingSenderId: "817228680309",
    appId: "1:817228680309:web:451f1caa030f3d48"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$('#submit').on('click', function(event){

event.preventDefault();

var name= $('#name-input').val().trim();
var role= $('#role-input').val().trim();
var date= $('#date-input').val().trim();
var rate= $('#rate-input').val().trim();

var newEmp = {
    name: name,
    role: role,
    start: date,
    rate: rate,
  };

console.log(newEmp);

});