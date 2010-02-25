<%@ Page Language="C#" MasterPageFile="rmpMasterPage.master" AutoEventWireup="true"
    CodeFile="index.aspx.cs" Inherits="index" Title="Tycoons International Home Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="contentplaceholderRMP" runat="Server">
    <link rel="stylesheet" type="text/css" href="slider/contentslider.css" />

    <script type="text/javascript" src="slider/contentslider.js" />

    <script type="text/javascript">

featuredcontentslider.init({
	id: "slider1",  //id of main slider DIV
	contentsource: ["inline", ""],  //Valid values: ["inline", ""] or ["ajax", "path_to_file"]
	toc: "#increment",  //Valid values: "#increment", "markup", ["label1", "label2", etc]
	nextprev: ["Previous", "Next"],  //labels for "prev" and "next" links. Set to "" to hide.
	revealtype: "click", //Behavior of pagination links to reveal the slides: "click" or "mouseover"
	enablefade: [true, 0.2],  //[true/false, fadedegree]
	autorotate: [true, 30000],  //[true/false, pausetime]
	onChange: function(previndex, curindex){  //event handler fired whenever script changes slide
		//previndex holds index of last slide viewed b4 current (1=1st slide, 2nd=2nd etc)
		//curindex holds index of currently shown slide (1=1st slide, 2nd=2nd etc)
	}
})

    </script>

    <table align="center" border="0" cellpadding="0" cellspacing="0" class="tableClass" style="background-color: White;
        padding: 5px;">
        <tr>
            <td width="460">
                <div id="slider2" class="sliderwrapper">
                    <div class="contentdiv">
                        <a href="http://www.google.com/">
                            <img style="border-style: none;" src="images/the-dark-knight.jpg" alt="The Dark Kight"
                                width="458px" height="279px" /></a>
                    </div>
                    <div class="contentdiv">
                        <a href="http://www.google.com/">
                            <img style="border-style: none;" src="images/walle-movie-poster.jpg" alt="Wall E Movie"
                                width="458px" height="279px" /></a>
                    </div>
                    <div class="contentdiv">
                        <a href="http://www.google.com/">
                            <img style="border-style: none;" src="images/quantum-of-solace.jpg" alt="Quantum of Solace"
                                width="458px" height="279px" /></a>
                    </div>
                </div>
                <div id="paginate-slider2" class="pagination" style="display: none;">
                    <a href="#" class="toc">1</a> <a href="#" class="toc anotherclass">2</a> <a href="#"
                        class="toc">3</a> <a href="#" class="prev" style="margin-left: 10px"><</a> <a href="#"
                            class="next">></a>
                </div>

                <script type="text/javascript">

featuredcontentslider.init({
	id: "slider2",  //id of main slider DIV
	contentsource: ["inline", ""],  //Valid values: ["inline", ""] or ["ajax", "path_to_file"]
	toc: "markup",  //Valid values: "#increment", "markup", ["label1", "label2", etc]
	nextprev: ["Previous", "Next"],  //labels for "prev" and "next" links. Set to "" to hide.
	revealtype: "click", //Behavior of pagination links to reveal the slides: "click" or "mouseover"
	enablefade: [true, 0.2],  //[true/false, fadedegree]
	autorotate: [true, 30000],  //[true/false, pausetime]
	onChange: function(previndex, curindex){  //event handler fired whenever script changes slide
		//previndex holds index of last slide viewed b4 current (1=1st slide, 2nd=2nd etc)
		//curindex holds index of currently shown slide (1=1st slide, 2nd=2nd etc)
	}
})

                </script>

            </td>
            <td valign="top">
                <table cellpadding="0" cellspacing="0" border="0" style="padding-left:15px;" width="100%">
                    <tr>
                        <td style="width:100%" colspan="2">
                            <p style="font-size:16px; font-weight:bold; font-family:Tahoma,Arial,Helvetica,sans-serif;">Welcome</p>
                            <p>
                                <span style="font-weight:bold;">Tycoons International.com</span> is a leading virtual corporate business that will
                                help you monetize your work to the most level you could reach.</p>
                           </td>
                          
                    </tr>
                    <tr>
                        <td valign="top">
                            <p class="fp-title" style="font-size:14px; padding-top:5px;">
                                Quick Links</p>
                            <div id="horiz-h1-main3">
                            
                            </div>
                              <table cellpadding="3" cellspacing="0" border="0" style="padding-left: 10px;">
                                <tr>
                                    <td>
                                        <a href="#" class="fpblue"><strong>Contest </strong></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" class="fpblue"><strong>Pictures & Videos </strong></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" class="fpblue"><strong>Certification</strong></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" class="fpblue"><strong>Success Stories</strong></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" class="fpblue"><strong>Common Questions</strong></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" class="fpblue"><strong>Training</strong></a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td valign="top">
                            <p class="fp-title" style="font-size:14px; padding-top:5px;">
                                Achievers</p>
                            <div id="horiz-h1-main3">
                            
                            </div>
                              <table cellpadding="3" cellspacing="0" border="0" style="height:150px; width:180px; border:1px solid black; margin-top:10px;">
                                <tr>
                                    <td>
                                        
                                    </td>
                                </tr>
                                
                            </table>
                        </td>
                    </tr>
            
                </table>
            </td>
        </tr>
    </table>
    <table class="tableClass" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
        <tr>
            <td valign="top">
                <img src="ASSETS/graphics/hp/123.PNG" usemap="#logo" />
                 <%-- <map name="logo" id="logo">
                        <area shape="rect" coords="15,23,140,89" href="#">
                        <area shape="rect" coords="587,19,751,90" href="#">
                    </map>--%>
                </td>
        </tr>
        <tr>
            <td height="10" />
        </tr>
    </table>
</asp:Content>
