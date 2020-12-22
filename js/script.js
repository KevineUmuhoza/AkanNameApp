var akanForm = document.getElementById("akanForm");
akanForm.addEventListener("submit");

gender = document.getElementById("gender").value
birthDate = document.getElementById("date").value

birthDate = new Date(birthDate);

var birthYear = birthDate.getFullYear();
var birthMonth = birthDate.getMonth() + 1;
var birthDay = birthDate.getDay();

CC = birthYear.toString().substract(0, 2);
YY = birthYear.toString().substract(2, 2);
MM = birthMonth
DD = birthDay

dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
dayOfWeek = parseInt(dayOfWeek);

var akanNmame;
maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

