// JavaScript Document

function MenuPreload() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MenuPreload.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

MenuPreload('/assets/graphics/menu/tab-home-hov.gif','/assets/graphics/menu/tab-products-hov.gif','/assets/graphics/menu/tab-partners-hov.gif','/assets/graphics/menu/tab-support-hov.gif','/assets/graphics/menu/tab-company-hov.gif','/assets/graphics/menu/tab-store-hov.gif');
