// JavaScript Document

<!-- hide from none JavaScript Browsers 



Image1 = new Image(98,30)
Image1.src = "http://www.liutilities.com/assets/graphics/menu/tab-on.gif"

Image2 = new Image(98,30)
Image2.src = "http://www.liutilities.com/assets/graphics/menu/tab-store-hov.gif"

Image3 = new Image(98,30)
Image3.src = "http://www.liutilities.com/assets/graphics/menu/tab-store-off.gif"

Image4 = new Image(98,30)
Image4.src = "http://www.liutilities.com/assets/graphics/menu/tab-off.gif"

Image5 = new Image(98,30)
Image5.src = "http://www.liutilities.com/assets/graphics/menu/tab-hov.gif"


 




// End Hiding -->


var selected;

function getMainSection() {
	var url = window.location.href;
	if (url.indexOf('store')!=-1) 		{return 'store';}
	if (url.indexOf('products')!=-1) 	{return 'products';}
	if (url.indexOf('partners')!=-1) 	{return 'partners';}
	if (url.indexOf('support')!=-1) 	{return 'support';}
	if (url.indexOf('about')!=-1) 		{return 'company';}		
	if (url.indexOf('news')!=-1) 		{return 'company';}		
	return 'home';
}

function getSubSection(section) {
	var url = window.location.href;
	switch (section) {
		case "store":
			if (url.indexOf('upgrades')!=-1) {return 'upgrades';}
			if (url.indexOf('third')!=-1) {return 'thirdparty';}
			return 'store'; // i.e. overview OR default page
		
		case "products":
			if (url.indexOf('products/downloads')!=-1) {return 'downloadsproducts';}
			if (url.indexOf('products/freescans')!=-1) {return 'freescans';}
			if (url.indexOf('products/store/third')!=-1) {return 'pthird';}
			return 'products';
			
		case "partners":
			if (url.indexOf('reseller')!=-1) {return 'reseller';}
			if (url.indexOf('affiliate')!=-1) {return 'affiliate';}
			if (url.indexOf('oem')!=-1) {return 'oem';}
			return 'partners';
			
		case "support":
			if (url.indexOf('downloads')!=-1) {return 'downloadssupport';}
			if (url.indexOf('faq')!=-1) {return 'faqs';}
			if (url.indexOf('regkey')!=-1) {return 'regkey';}
		/*	if (url.indexOf('manuals /registrybooster')!=-1) {return 'supportmanuals';}*/
			return 'support';
			
		case "company":
			if (url.indexOf('timeline')!=-1) {return 'timeline';}
			if (url.indexOf('careers')!=-1) {return 'careers';}
			if (url.indexOf('news')!=-1) {return 'news';}
			if (url.indexOf('labs')!=-1) {return 'labs';}
			if (url.indexOf('investors')!=-1) {return 'investors';}
			if (url.indexOf('contact')!=-1) {return 'contact';}
			return 'about';
			
		default: 
			return 'home';
	}
}

function DoNavigation() {
	var mainSection = getMainSection();
	
	if (mainSection=='home') {
		subSection = 'home';
	} else {
		var subSection  = getSubSection(mainSection);
	}
	
	selected = mainSection;
	
	var current = "class='current'";
	
	document.write("<div  class='" + mainSection + "'><div id='navcontainer'><div id='tab-container'>");
	document.write("<div id='tab-home'><a href='http://www.liutilities.com'><div id='tab-text-spacer'></div><div id='seperator'></div><div>Home</div></a></div>");
	document.write("<div id='tab-products'><a href='http://www.liutilities.com/products'><div id='tab-text-spacer'></div><div id='seperator'></div><div>Products</div></a></div>");
	document.write("<div id='tab-partners'><a href='http://www.liutilities.com/partners'><div id='tab-text-spacer'></div><div id='seperator'></div><div>Partners</div></a></div>");
	document.write("<div id='tab-support'><a href='http://www.liutilities.com/support'><div id='tab-text-spacer'></div><div id='seperator'></div><div>Support</div></a></div>");
	document.write("<div id='tab-company'><a href='http://www.liutilities.com/about'><div id='tab-text-spacer'></div><div id='seperator'></div><div>Company</div></a></div>");
	document.write("<div id='tab-store'><a href='http://www.liutilities.com/products/store'><div id='tab-text-spacer'></div><div id='seperator'></div><div>Store</div></a></div>");
	document.write("</div><div id='seperator'></div>");
	document.write("<div id='sub-navcontainer'><img src='http://www.liutilities.com/ASSETS/graphics/menu/sub-nav-left.gif' style='float:left'>");	
		
	document.write("<div id='sub-menu'>");
		if (subSection=="home") 				{document.write("<span class='sub-currentpage'>Welcome to Uniblue.com</span><a href='#' onclick='DoJoinPopup(\"Join\");'  class='community-nav-link'><span style='padding-left:30px;'>Subscribe to receive news & offers</span></a>");}
		
		if (subSection=="products")				{document.write("<span class='sub-currentpage'>Solutions</span><a href='http://www.liutilities.com/products/downloads'>Trial versions</a><a href='http://www.liutilities.com/products/freescans'> Free scans</a><a href='http://www.liutilities.com/products/store/third' >Third party offers</a>");}
		if (subSection=="downloadsproducts")	{document.write("<a href='http://www.liutilities.com/products' >Solutions</a><span class='sub-currentpage'>Trial versions</span><a href='http://www.liutilities.com/products/freescans'> Free scans</a><a href='http://www.liutilities.com/products/store/third' >Third party offers</a>");}  
		if (subSection=="freescans")			{document.write("<a href='http://www.liutilities.com/products' >Solutions</a><a href='http://www.liutilities.com/products/downloads'>Trial versions</a><span class='sub-currentpage'> Free scans</span><a href='http://www.liutilities.com/products/store/third' >Third party offers</a>");} 
		if (subSection=="pthird")			{document.write("<a href='http://www.liutilities.com/products' >Solutions</a><a href='http://www.liutilities.com/products/downloads'>Trial versions</a><span class='sub-currentpage'> Free scans</span><a href='http://www.liutilities.com/products/store/third' >Third party offers</a>");} 
		
		if (subSection=="partners")   			{document.write("<span class='sub-currentpage'>Overview</span><a href='http://www.liutilities.com/partners/reseller' >Resellers</a><a href='http://www.liutilities.com/partners/affiliate' >Affiliates</a><a href='http://www.liutilities.com/partners/oem' >OEM</a>");} 			  
		if (subSection=="reseller")   			{document.write("<a href='http://www.liutilities.com/partners' >Overview</a><span class='sub-currentpage'>Resellers</span><a href='http://www.liutilities.com/partners/affiliate' >Affiliates</a><a href='http://www.liutilities.com/partners/oem' >OEM</a>");} 			  
		if (subSection=="affiliate")  			{document.write("<a href='http://www.liutilities.com/partners' >Overview</a><a href='http://www.liutilities.com/partners/reseller' >Resellers</a><span class='sub-currentpage'>Affiliates</span><a href='http://www.liutilities.com/partners/oem' >OEM</a>");} 			  
		if (subSection=="oem") 		  			{document.write("<a href='http://www.liutilities.com/partners' >Overview</a><a href='http://www.liutilities.com/partners/reseller' >Resellers</a><a href='http://www.liutilities.com/partners/affiliate' >Affiliates</a><span class='sub-currentpage'>OEM</span>");} 			  
		
		if (subSection=="support")   			{document.write("<span class='sub-currentpage'>Support Center</span><a href='http://www.liutilities.com/support/faq/categories/generalquestions/' >FAQs</a><a href='http://www.liutilities.com/support/downloads' >Downloads</a><a href='http://www.liutilities.com/support/regkey' >Retrieve serial numbers</a><a href='http://www.liutilities.com/support/manuals'>Product manuals</a>");} 
		if (subSection=="faqs")   			    {document.write("<a href='http://www.liutilities.com/support' >Support Center</a><span class='sub-currentpage'>FAQs</span><a href='http://www.liutilities.com/support/downloads' >Downloads</a><a href='http://www.liutilities.com/support/regkey' >Retrieve serial numbers</a><a href='http://www.liutilities.com/support/manuals'>Product manuals</a>");} 
		if (subSection=="downloadssupport")   	{document.write("<a href='http://www.liutilities.com/support' >Support Center</a><a href='http://www.liutilities.com/support/faq/categories/generalquestions/' >FAQs</a><span class='sub-currentpage'>Downloads</span><a href='http://www.liutilities.com/support/regkey' >Retrieve serial numbers</a><a href='http://www.liutilities.com/support/manuals'>Product manuals</a>");} 
		if (subSection=="regkey")   			{document.write("<a href='http://www.liutilities.com/support' >Support Center</a><a href='http://www.liutilities.com/support/faq/categories/generalquestions/' >FAQs</a><a href='http://www.liutilities.com/support/downloads' >Downloads</a><span class='sub-currentpage'>Retrieve serial numbers</span><a href='http://www.liutilities.com/support/manuals'>Product Manuals</a>");}
		if (subSection=="supportmanuals")   			{document.write("<a href='http://www.liutilities.com/support' >Support Center</a><a href='http://www.liutilities.com/support/faq/categories/generalquestions/' >FAQs</a><a href='http://www.liutilities.com/support/downloads' >Downloads</a><a href='http://www.liutilities.com/support/regkey' >Retrieve serial numbers</a><span class='sub-currentpage'><a href='http://www.liutilities.com/support/manuals'>Product manuals</a></span>");}
	
		if (subSection=="about")   				{document.write("<span class='sub-currentpage'>Overview</span><a href='http://www.liutilities.com/about/timeline' >Timeline</a><a href='http://www.liutilities.com/about/careers' >Careers</a><a href='http://www.liutilities.com/news' >News Center</a><a href='http://www.liutilities.com/about/labs' >Labs</a><a href='http://www.liutilities.com/about/investors' >Investors</a><a href='http://www.liutilities.com/about/contact' >Contact</a>");} 
		if (subSection=="timeline")   			{document.write("<a href='http://www.liutilities.com/about' >Overview</a><span class='sub-currentpage'>Timeline</span><a href='http://www.liutilities.com/about/careers' >Careers</a><a href='http://www.liutilities.com/news' >News Center</a><a href='http://www.liutilities.com/about/labs' >Labs</a><a href='http://www.liutilities.com/about/investors' >Investors</a><a href='http://www.liutilities.com/about/contact' >Contact</a>");} 
		if (subSection=="careers")   			{document.write("<a href='http://www.liutilities.com/about' >Overview</a><a href='http://www.liutilities.com/about/timeline' >Timeline</a><span class='sub-currentpage'>Careers</span><a href='http://www.liutilities.com/news' >News Center</a><a href='http://www.liutilities.com/about/labs' >Labs</a><a href='http://www.liutilities.com/about/investors' >Investors</a><a href='http://www.liutilities.com/about/contact' >Contact</a>");} 
		if (subSection=="news")   				{document.write("<a href='http://www.liutilities.com/about' >Overview</a><a href='http://www.liutilities.com/about/timeline' >Timeline</a><a href='http://www.liutilities.com/about/careers' >Careers</a><span class='sub-currentpage'>News Center</span><a href='http://www.liutilities.com/about/labs' >Labs</a><a href='http://www.liutilities.com/about/investors' >Investors</a><a href='http://www.liutilities.com/about/contact' >Contact</a>");} 
		if (subSection=="labs")   				{document.write("<a href='http://www.liutilities.com/about' >Overview</a><a href='http://www.liutilities.com/about/timeline' >Timeline</a><a href='http://www.liutilities.com/about/careers' >Careers</a><a href='http://www.liutilities.com/news' >News Center</a><span class='sub-currentpage'>Labs</span><a href='http://www.liutilities.com/about/investors' >Investors</a><a href='http://www.liutilities.com/about/contact' >Contact</a>");} 
		if (subSection=="investors")   			{document.write("<a href='http://www.liutilities.com/about' >Overview</a><a href='http://www.liutilities.com/about/timeline' >Timeline</a><a href='http://www.liutilities.com/about/careers' >Careers</a><a href='http://www.liutilities.com/news' >News Center</a><a href='http://www.liutilities.com/about/labs' >Labs</a><span class='sub-currentpage'>Investors</span><a href='http://www.liutilities.com/about/contact' >Contact</a>");} 
		if (subSection=="contact")   			{document.write("<a href='http://www.liutilities.com/about' >Overview</a><a href='http://www.liutilities.com/about/timeline' >Timeline</a><a href='http://www.liutilities.com/about/careers' >Careers</a><a href='http://www.liutilities.com/news' >News Center</a><a href='http://www.liutilities.com/about/labs' >Labs</a><a href='http://www.liutilities.com/about/investors' >Investors</a><span class='sub-currentpage'>Contact</span>");} 
		
		
		if (subSection=="store")   				{document.write("<span class='sub-currentpage'>Online Store</span><a href='http://www.liutilities.com/products/store/upgrades' >Upgrades</a><a href='http://www.liutilities.com/products/store/third' >Third party offers</a>");} 			
		if (subSection=="upgrades")   			{document.write("<a href='http://www.liutilities.com/products/store' >Online store</a><span class='sub-currentpage'>Upgrades</span><a href='http://www.liutilities.com/products/store/third' class='sub-currentpage'>Third party offers</a>");} 
		if (subSection=="thirdparty")   		{document.write("<a href='http://www.liutilities.com/products/store' >Online store</a><a href='http://www.liutilities.com/products/store/upgrades' >Upgrades</a><span class='sub-currentpage'>Third party offers</span>");}

	document.write("</div>");

	document.write("<img src='http://www.liutilities.com/ASSETS/graphics/menu/sub-nav-right.gif' style='float:right'>");
	
	document.write("<div id='dropdown-menu' class='dropdownstyle'><ul><li><a href='http://www.liutilities.com/products/' rel='dropmenu1' style='margin:0 13px 0 0;' ><img src='http://www.liutilities.com/assets/graphics/menu/menu-spacer.gif' width='33px' height='8px' class='drop-box-fix' />Choose a product</a></li></ul></div>");
	document.write("<div id='dropmenu1' class='dropmenudiv' style='margin:0;padding:0;'><div  id='faded'  style='margin:0;padding:10px 0 0 0;'>");
	document.write("<a href='http://www.liutilities.com/products/powersuite/' 		style='background:url(http://www.liutilities.com/assets/graphics/menu/PS-Icon.gif) left no-repeat; margin:4px 2px 0 15px'>PowerSuite 2009</a>");
	document.write("<div class='separator'><p style='line-height: 0px;'></p></div>");
	document.write("<a href='http://www.liutilities.com/products/driverscanner/' 	style='background:url(http://www.liutilities.com/assets/graphics/menu/DS-Icon.gif) left no-repeat; margin:5px 0 0 15px'>DriverScanner 2009</a>");
	document.write("<a href='http://www.liutilities.com/products/registrybooster/' style='background:url(http://www.liutilities.com/assets/graphics/menu/RB-Icon.gif) left no-repeat; margin:5px 3px 0 15px'>RegistryBooster 2010</a>");
	document.write("<a href='http://www.liutilities.com/products/speedupmypc/' 	style='background:url(http://www.liutilities.com/assets/graphics/menu/SU-Icon.gif) left no-repeat; margin:5px 0 0 15px'>SpeedUpMyPC 2009</a>");
	document.write("<div class='separator'><p style='line-height: 0px;'></p></div>");
	document.write("<a href='http://www.liutilities.com/products/diskrescue/' 	style='background:url(http://www.liutilities.com/assets/graphics/menu/DR-Icon.gif) left no-repeat; margin:10px 0 0 15px'>DiskRescue 2009</a>");
	document.write("</div><div id='center-img'  ><img src='http://www.liutilities.com/assets/graphics/menu/dropdown-bottom.png'  width='173' height='16' alt=''  /></div></div>");
	//document.write("<a href='http://www.liutilities.com/products/spyeraser/' 		style='background:url(http://www.liutilities.com/assets/graphics/menu/SE-Icon.gif) left no-repeat; margin:10px 0 0 15px'>SpyEraser 2</a>");	
	
	
	// commented out by sharonz 10/07/08
/*	document.write("<a href='http://www.liutilities.com/products/wintasksstd' 	style='background:url(http://www.liutilities.com/assets/graphics/menu/TF-Icon.gif) left no-repeat; margin:5px 0 0 15px'>WinTasks 5</a>");
	document.write("<a href='http://www.liutilities.com/products/wintaskspro' 	style='background:url(http://www.liutilities.com/assets/graphics/menu/TF-Icon.gif) left no-repeat; margin:5px 0 0 15px'>WinTasks 5 Pro</a>");*/
	

	document.write("</div></div>");
}

function tabSwitch(product, switchto) {if (product!=selected) {newImage = "url(http://www.liutilities.com/assets/graphics/menu/tab-" + product + "-" + switchto + ".gif)";document.getElementById('tab-' + product).style.backgroundImage = newImage;}}

