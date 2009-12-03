// JavaScript Document
var visibleTab;
var visibleProduct;
var visibleSubProduct = "none";

function quickshow(id) {
									
	document.getElementById(id).style.display = "";
							
	}



function quickhide(id) {document.getElementById(id).style.display = "none";}
function show(id) {Effect.Appear(id);}
function hide(id) {quickhide(id);}
function setDisplay(id, style) {document.getElementById(id).style.display = style;}

function red(buildUrl) {window.open("http://download.uniblue.com/"+buildUrl,'Uniblue','width=1,height=1');}

function SupportDropdownChange() {
	var dropdownIndex = document.getElementById('supCategory').selectedIndex;
	var switchTo = document.getElementById('supCategory')[dropdownIndex].value;
	var newTab;
	
	switch (switchTo) {
		case "Request Serial Numbers" :
			newTab = "supRequestSerialNumbers";
			break;
			
		case "Registry Booster" :
			newTab = "supRegistryBooster";
			break;
			
		case "SpeedUpMyPC" :
			newTab = "supSpeedUpMyPC3";
			break;
			
		case "SpyEraser" :
			newTab = "supSpyEraser";
			break;
			
		case "PowerSuite" :
			newTab = "supPowerSuite";
			break;
			
		case "System Tweaker" :
			newTab = "supSystemTweaker";
			break;
			
		case "WinBackup" :
			newTab = "supWinBackup";
			break;
			
		case "WinBackup Open File Manager" :
			newTab = "supWinBackupOFM";
			break;
			
		case "WinTasks" :
			newTab = "supWinTasks";
			break;
			
		case "Process Library" :
			newTab = "supProcessLibrary";
			break;
			
		case "LocalCooling" :
			newTab = "supLocalCooling";
			break;
			
		case "Other Technical Questions" :
			newTab = "supOtherTechnicalQuestions";
			break;
			
		case "SpeedUpMyPC 2" :
			newTab = "supSpeedUpMyPC2";
			break;
			
		default : 
			visibleTab = "subGeneralQuestions";
			return;
	}
	
	quickhide(visibleTab);
	Effect.Appear(newTab);
	document.getElementById("supTitle").innerHTML = switchTo;
	visibleTab = newTab;	
}

function showTimelineImage(switchTo) {
	if (switchTo==visibleTab) {return;}
	quickshow(switchTo);
	quickhide(visibleTab);	
	visibleTab = switchTo;
}

function getRandomStaffImage() {
	var images = new Array ("5.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "12.jpg");
	var i = Math.round(9*Math.random());
	document.getElementById("random-image").innerHTML = '<div style="height:386px;display:block;"><img src="http://www.liutilities.com/assets/graphics/about/staff/' + images[i] + '" /></div>';	
	setTimeout('getRandomStaffImage()', 12000); //every 10 seconds
}

function showProduct(switchTo) {
	if (switchTo==visibleProduct) {return;}
	
	quickhide(visibleProduct);
	Effect.Appear(switchTo, {duration:0.4});
	
	visibleProduct = switchTo;
	
	/*
	var url = window.location.href;
	if (url.indexOf('prod-top')!=-1) {
		window.location = url;
	} else {
		window.location = url + "#prod-top";
	}
	*/
}





function showSubProduct(switchTo) {
	if (visibleSubProduct!="none") {
		quickhide(visibleSubProduct);
	}
	
	Effect.Appear(switchTo, {duration:0.4});
	visibleSubProduct = switchTo;
}

function showContent(switchTo) {
	if (switchTo==visibleTab) {return;}
	quickshow(switchTo);
	quickhide(visibleTab);
	visibleTab = switchTo;
}

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
		  	return pair[1];
		} else {
		  	return "-";
		}
	} 
}

function checkIncomingUrl() {
	var showme = getQueryVariable("show");
	
	if (showme!="-") {
		showContent(showme);
	}
}

function checkunsub() {
		var unsubcheck = getQueryVariable("unsubscribe");
		if (unsubcheck == "1") {
			return true
		}else{
			return false
		}
	}

//setTimeout("show('" + switchTo + "-2')",600);
