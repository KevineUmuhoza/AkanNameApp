var akanForm = document.getElementById("akanForm");
akanForm.addEventListener("submit");

gender = document.getElementById("gender").value
birthDate = document.getElementById("date").value

birthDate = new Date(birthDate);

var birthYear = birthDate.getFullYear();
var birthMonth = birthDate.getMonth() + 1;
var birthDay = birthDate.getDay();

