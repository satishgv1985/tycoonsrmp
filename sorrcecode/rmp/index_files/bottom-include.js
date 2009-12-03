
		function check_cdfs(form) {
			return true;
		}

    function doSubmit() {
        if (check_cdfs(document.survey)) {
			window.open('','signup','resizable=1,scrollbars=0,width=300,height=150');
            return true;
        }
        else { return false; }
    }


<!--

function doFocus(id, str) {
	var elem = document.getElementById(id);
	if (elem.value == str) {
		elem.value = ""
    }
}

function doBlur(id, str) {
	var elem = document.getElementById(id);
	if (elem.value == "") {
		elem.value = str
	}
}
//-->
function DoPopCommunity() {	
	document.write("<div id='panelJoin' onClick='quickhide(\"panelJoin\"); quickhide(\"dialogJoin\")' style='display:none;' ></div>");
	document.write("<div id='horizonJoin'><div id='dialogJoin' style='display:none; background-image:url(http://www.liutilities.com/assets/graphics/popups/community-new.gif);padding:10px 20px 10px 40px;text-align:left;'>");
	document.write("<form action='http://dr.bluehornet.com/phase2/bullseye/contactupdate1.php3' method='post' name='bullseye' id='bullseye' onSubmit='return doSubmit();' target='signup' style='margin:242px 0 0 7px;padding:0;text-align:left;'>");
    document.write("<input name='firstname' type='text' id='firstname' style='margin:1px 0 6px 0;padding-left:3px;width:150px;font-size:11px;' onFocus='doFocus(\"firstname\", \"First name\")' onBlur='doBlur(\"firstname\", \"First name\")' value='First name' size='10' class='frm-req'  ><br />");
    document.write("<input name='lastname' type='text' id='lastname' style='margin:1px  0 6px 0;padding-left:3px;width:150px;font-size:11px;' onFocus='doFocus(\"lastname\", \"Last name\")' onBlur='doBlur(\"lastname\", \"Last name\")' value='Last name' size='10' class='frm-req' ><br />");		   
	document.write("<input type=hidden name='cid' value='15b82f2a1f965b2e0503dc7d8ea493'>");
	document.write("<input name='email' type='text' id='email' style='margin:1px  0 6px 0;padding-left:3px;width:150px;font-size:11px;' onFocus='doFocus(\"email\", \"Your email address\")' onBlur='doBlur(\"email\", \"Your email address\")' value='Your email address' size='10' class='frm-req' ><br />");
	document.write("<input type='hidden' name='message' value='Thank you. Your information has been submitted. To ensure delivery of your newsletter(s), please add newsletter@unibluenews.com to your address book, spam filter whitelist, or tell your companys IT group to allow this address to pass through any filtering software they may have set up.'>"); 
	document.write("<input type=hidden name='grp[]' value='58325'>"); 
	document.write("<input name='SubmitBullsEye' type='image' src='http://www.liutilities.com/assets/graphics/buttons/but-signup.gif' onClick='return doSubmit();' alt='Subscribe' align='middle'   style='margin:15px 0 0 0;padding:0;border:0;' />");
	document.write("</form>");
	document.write("<div style='margin:20px 0 0 0;display:block;width:100%;height:80px;cursor:pointer' onClick='quickhide(\"panelJoin\"); quickhide(\"dialogJoin\")'></div>");
	document.write("</div></div>");
	
}
function DoPopGuarantee() {
	document.write("<div id='panelGuarantee' onClick='quickhide(\"panelGuarantee\"); quickhide(\"dialogGuarantee\")' style='display:none;'></div>");
	document.write("<div id='horizonGuarantee'><div id='dialogGuarantee' style='display:none; padding:0;'>");
	document.write("<div style='margin:0;display:block;width:100%;height:80px;cursor:pointer' onClick='quickhide(\"panelGuarantee\"); quickhide(\"dialogGuarantee\")'><img src='http://www.liutilities.com/assets/graphics/popups/t30-new.gif' border='0' usemap='#Map' />");
	document.write("<map name='Map' id='Map'><area shape='rect' coords='36,294,195,327' href='/support' /></map></div>");
	document.write("</div></div>");
}
function DoPopDelivery() {
	document.write("<div id='panelDelivery' onClick='quickhide(\"panelDelivery\"); quickhide(\"dialogDelivery\")' style='display:none;'></div>");
	document.write("<div id='horizonDelivery'><div id='dialogDelivery' style='display:none; padding:0;'>");
	document.write("<div style='margin:0;display:block;width:100%;height:80px;cursor:pointer' onClick='quickhide(\"panelDelivery\"); quickhide(\"dialogDelivery\")'><img src='http://www.liutilities.com/assets/graphics/popups/delivery-new.gif' border='0' usemap='#Map' />");
	document.write("<map name='Map' id='Map'><area shape='rect' coords='36,294,195,327' href='/support' /></map></div>");
	document.write("</div></div>");
}
function DoPopPhone() {
	document.write("<div id='panelPhone' onClick='quickhide(\"panelPhone\"); quickhide(\"dialogPhone\")' style='display:none;'></div>");
	document.write("<div id='horizonPhone'><div id='dialogPhone' style='display:none; padding:0;'>");
	document.write("<div style='margin:0;display:block;width:100%;height:80px;cursor:pointer' onClick='quickhide(\"panelPhone\"); quickhide(\"dialogPhone\")'><img src='http://www.liutilities.com/assets/graphics/popups/phone-new.jpg' border='0' usemap='#Map' />");
	document.write("<map name='Map' id='Map'><area shape='rect' coords='36,294,195,327' href='/support' /></map></div>");
	document.write("</div></div>");
}
function DoPopTrusted() {
	document.write("<div id='panelMS' onClick='quickhide(\"panelMS\"); quickhide(\"dialogMS\")' style='display:none;'></div>");
	document.write("<div id='horizonMS'><div id='dialogMS' style='display:none; padding:0;'>");
	document.write("<div style='margin:0;display:block;width:100%;height:80px;cursor:pointer' onClick='quickhide(\"panelMS\"); quickhide(\"dialogMS\")'><img src='http://www.liutilities.com/assets/graphics/popups/ms-new.gif' border='0' usemap='#Map' />");
	document.write("<map name='Map' id='Map'><area shape='rect' coords='36,294,195,327' href='/support' /></map></div>");
	document.write("</div></div>");
}

function DoPopOverlay() {
	document.write("<div id='overlay' onClick='quickhide(\"overlay\"); quickhide(\"dialog\")' style='display:none;'></div><div id='horizon'><div id='dialog' style='display:none;'>");
	document.write("<span id='screenshotimage'></span><span id='screenshotdescription'></span><div id='screenshot-buttons' style='margin-top:15px;'>");
	document.write("<a href='#' onClick='quickhide(\"overlay\"); quickhide(\"dialog\")'><img src='http://www.liutilities.com/assets/graphics/buttons/but-shot-close.gif' style='margin:18px 0 0 0;'></a>");
	document.write("<span id='screenshotdownload'></span></div></div></div>");
}