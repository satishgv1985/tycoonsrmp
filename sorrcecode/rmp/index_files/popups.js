// Updated by sharonz on 11-07-08
// Screenshots in product pages
//Updated for DS product


function DoScreenshot(product, filename) {
	var url = "http://www.liutilities.com/assets/graphics/screenshots/" + product + "/large/" + filename;
	
	var dsurl = "http://download.uniblue.com/ub/main/ds/solutions/driverscanner.exe";
	
	var rburl = "http://download.uniblue.com/ub/main/rb/solutions/registrybooster.exe";
	var spurl = "http://download.uniblue.com/ub/main/sp/solutions/speedupmypc3.exe";
	var seurl = "http://download.uniblue.com/ub/main/se/solutions/spyeraser.exe";
	var psurl = "http://www.liutilities.com/products/store/order/scesd/";
	var drurl = "http://download.uniblue.com/ub/main/dr/solutions/diskrescue.exe";

	var wtprourl = "http://www.liutilities.com/products/store/order/wtproesd/";
	var wburl = "http://www.liutilities.com/products/trial/wbform/";
	
	document.getElementById("screenshotimage").innerHTML = "<img src='" + url + "' style='margin:20px 0 0 0;' />";
	
	switch (product) {
		
		case "ds" :	
			document.getElementById("screenshotdownload").innerHTML = "<a href='" + dsurl + "'><img src='/assets/graphics/buttons/but-shot-get.gif'></a>";
			break;
		
		case "rb" :	
			document.getElementById("screenshotdownload").innerHTML = "<a href='" + rburl + "'><img src='/assets/graphics/buttons/but-shot-get.gif'></a>";
			break;
			
		case "sp" :
			document.getElementById("screenshotdownload").innerHTML = "<a href='" + spurl + "'><img src='/assets/graphics/buttons/but-shot-get.gif'></a>";
			break;
			
		case "se" :
			document.getElementById("screenshotdownload").innerHTML = "<a href='" + seurl + "'><img src='/assets/graphics/buttons/but-shot-get.gif'></a>";
			break;
			
		case "ps" :	
			document.getElementById("screenshotdownload").innerHTML = "<a href='" + psurl + "'><img src='/assets/graphics/buttons/but-shot-buy.gif'></a>";
			break;

		case "dr" :	
			document.getElementById("screenshotdownload").innerHTML = "<a href='" + drurl + "'><img src='/assets/graphics/buttons/but-shot-get.gif'></a>";
			break;


		case "wtpro" :	
			document.getElementById("screenshotdownload").innerHTML = "<a href='" + wtprourl + "'><img src='/assets/graphics/buttons/but-shot-buy.gif'></a>";
			break;
			
		case "wb" :	
			document.getElementById("screenshotdownload").innerHTML = "<a href='" + wburl + "'><img src='/assets/graphics/buttons/but-shot-try.gif'></a>";
			break;

		case "st" :	
			document.getElementById("screenshotdownload").innerHTML = "";
			break;			
			
		case "pp" :	
			document.getElementById("screenshotdownload").innerHTML = "";
			break;
	
	}
	


	
	switch (product) {
		
		case "ds" :	
			document.getElementById("screenshotdescription").innerHTML = "<br>Release the full functionality of your PC now with DriverScanner.<br>Click the green button to try a FREE scan now.";
			break;


		case "rb" :	
			document.getElementById("screenshotdescription").innerHTML = "<br>RegistryBooster is the most advanced registry cleaner available on the market.<br>Click the green button to try a FREE scan now.";
			break;
			
		case "sp" :
			document.getElementById("screenshotdescription").innerHTML = "<br>SpeedUpMyPC ensures your PC is automatically optimized for maximum performance <br>in just a few easy clicks. Click the green button to try a FREE scan now.";
			break;
			
		case "se" :
			document.getElementById("screenshotdescription").innerHTML = "<br>SpyEraser - Protect your PC against privacy threats with the award-winning SpyEraser.<br>Click the green button to try a FREE scan now.";
			break;
			
		case "ps" :	
			document.getElementById("screenshotdescription").innerHTML = "<br>PowerSuite - One advanced yet simple solution for updating your PC and delivering improved <br/>system stability and increased computer speeds. Click the orange button to purchase now.";
			break;
			
		case "dr" :	
			document.getElementById("screenshotdescription").innerHTML = "<br>DiskRescue - Defragment your hard drive for better PC performance. <br />Click the green button to try a FREE scan now.";
			
			break;
			
		case "wtpro" :	
			document.getElementById("screenshotdescription").innerHTML = "<br>WinTasks 5 - The ultimate power utility software that arms users with a comprehensive set of tools to put them in full control of their computer. Click the orange button to purchase now.";
			break;
			
		case "wb" :	
			document.getElementById("screenshotdescription").innerHTML = "<br>WinBackup 2 - Complete security for all your important data with this top performing data <br>backup and recovery program. Click the orange button to purchase now.";
			break;

		case "st" :	
			document.getElementById("screenshotdescription").innerHTML = "<br><br>SystemTweaker - The easy way to control your PC.<br>";
			break;
			
		case "pp" :	
			document.getElementById("screenshotdescription").innerHTML = "<br><br>PixelPerfect - The powerful image editing application.";
			break;
		
	}
	
	
	quickshow('overlay'); 
	Effect.Appear('dialog', {duration:0.4});
}

function DoJoinPopup(tab) {quickshow('panel'+tab); Effect.Appear('dialog'+tab, {duration:0.4});}