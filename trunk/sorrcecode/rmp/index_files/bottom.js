function MenuPreloadPopups() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MenuPreloadPopups.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

MenuPreloadPopups('/assets/graphics/popups/delivery.gif','/assets/graphics/popups/ice.gif','/assets/graphics/popups/join.gif','/assets/graphics/popups/microsoft.gif','/assets/graphics/popups/ms.gif','/assets/graphics/popups/phone.gif','/assets/graphics/popups/t30.gif');

//var url = window.location.href;
//	if (url.indexOf('store')!=-1) 		{}
//	if (url.indexOf('products')!=-1) 	{}
//	if (url.indexOf('partners')!=-1) 	{}
//	if (url.indexOf('support')!=-1) 	{}
//	if (url.indexOf('about')!=-1) 		{}		
//	if (url.indexOf('news')!=-1) 		{}