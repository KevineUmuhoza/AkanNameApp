var akanForm = document.getElementById("akanForm");
akanForm.addEventListener("submit");

gender = document.getElementById("gender").value
birthDate = document.getElementById("date").value

birthDate = new Date(birthDate);

var birthYear = birthDate.getFullYear();
var birthMonth = birthDate.getMonth();
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

var birthDay;

if (dayOfWeek == 0 && gender == "male"){
    birthDay = "Sunday";
    akanNmame = maleAkanNames[0];
} else if (dayOfWeek == 0 && gender == "female"){
    birthDay = "Sunday";
    akanNmame = femaleAkanNames[0];
}else if (dayOfWeek == 1 && gender == "male"){
    birthDay = "Monday";
    akanNmame = maleAkanNames[1];
}else if (dayOfWeek == 1 && gender == "female"){
    birthDay = "Monday";
    akanNmame = femaleAkanNames[1];
}else if (dayOfWeek == 2 && gender == "male"){
    birthDay = "Tuesday";
    akanNmame = maleAkanNames[2];
}else if (dayOfWeek == 2 && gender == "female"){
    birthDay = "Tuesday";
    akanNmame = femaleAkanNames[2];
}else if (dayOfWeek == 3 && gender == "male"){
    birthDay = "Wednesday";
    akanNmame = maleAkanNames[3];
}else if (dayOfWeek == 3 && gender == "female"){
    birthDay = "Wednesday";
    akanNmame = femaleAkanNames[3];
}else if (dayOfWeek == 4 && gender == "male"){
    birthDay = "Thursday";
    akanNmame = maleAkanNames[4];
}else if (dayOfWeek == 4 && gender == "female"){
    birthDay = "Thursday";
    akanNmame = femaleAkanNames[4];
}else if (dayOfWeek == 5 && gender == "male"){
    birthDay = "Friday";
    akanNmame = maleAkanNames[5];
}else if (dayOfWeek == 5 && gender == "female"){
    birthDay = "Friday";
    akanNmame = femaleAkanNames[5];
}else if (dayOfWeek == 6 && gender == "male"){
    birthDay = "Saturday";
    akanNmame = maleAkanNames[6];
}else if (dayOfWeek == 6 && gender == "female"){
    birthDay = "Saturday";
    akanNmame = femaleAkanNames[6];
}

result = document.getElementById("result").innerHTML = "Your Akan Name is" + " " + document.getElementById("akanForm").reset();