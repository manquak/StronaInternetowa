function zapisz(){
	var imie = document.getElementById("name").value;
	sessionStorage.setItem("imie_klienta", imie);
}

function wczytaj(){
	var zap_imie = sessionStorage.getItem("imie_klienta");
	if(zap_imie){
	document.getElementById("comment").value = zap_imie+", dziekujemy za twoj feedback! Niedługo otrzymasz odpowiedz na swoje pytania ;)";
	}
}

function zapiszL(){
	let zap_imie = document.getElementById("name").value;
	localStorage.setItem("imie", zap_imie);
	let mail = document.getElementById("mail").value;
	localStorage.setItem("mail", mail);
	let data =  document.getElementById("data").value;
	localStorage.setItem("data", data);
}

function wczytajL(){
	var zap_imie = localStorage.getItem("imie");
	var mail = localStorage.getItem("mail");
	var data = new Date();
	var miesiac = data.getMonth()+1;
	var dzien = data.getDate();
	if(miesiac<10) miesiac = "0"+miesiac;
	if(dzien<10) dzien = "0"+dzien;
	
	document.getElementById("name").value = zap_imie;
	document.getElementById("mail").value = mail;
	document.getElementById("data").value = data.getFullYear()+"-"+miesiac+"-"+dzien;	
}