//Default Tab
document.getElementById("dispTab").click();
document.getElementById("posTab").click();

//Position Derivative Tab Selection
function openPosPage(evt, posDeriv) {
	//variables
	var i, posPage, posTabLink;


	//hide all elements with class 'posPage'
	posPage = document.getElementsByClassName("posPage");
	for (i = 0; i < posPage.length; i++) {
		posPage[i].style.display = "none";
	}


	//remove class 'active' from all elements with class 'posTabLink'
	posTabLink = document.getElementsByClassName("posTabLink");
	for (i = 0; i < posTabLink.length; i++) {
		posTabLink[i].className = posTabLink[i].className.replace(" active", "");
	}


	//show current tab and add 'active' class to button that opened tab
	document.getElementById(posDeriv).style.display = "block";
	evt.currentTarget.className += " active";
}

//Main Tab Selection
function openTab(evt, tabName) {
	var i, tabContents, mainTabLink;


	tabContents = document.getElementsByClassName("tabContents");
	for (i=0; i < tabContents.length; i++) {
		tabContents[i].style.display = "none";
	}

	mainTabLink = document.getElementsByClassName("mainTabLink");
	for (i=0; i < mainTabLink.length; i++) {
		mainTabLink[i].className = mainTabLink[i].className.replace(" activeTab", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " activeTab";
}