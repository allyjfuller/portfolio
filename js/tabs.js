function openSpiritGuide(sgTab) {
	var i;
	var x = document.getElementsByClassName("spiritGuide");
	for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(sgTab).style.display = "block";
}

function openEuroBus(ebTab) {
	var i;
	var x = document.getElementsByClassName("euroBus");
	for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(ebTab).style.display = "block";
}

function openMenew(mTab) {
	var i;
	var x = document.getElementsByClassName("menew");
	for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(mTab).style.display = "block";
}