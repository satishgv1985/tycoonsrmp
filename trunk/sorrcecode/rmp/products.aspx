<%@ Page Language="C#" MasterPageFile="rmpMasterPage.master" AutoEventWireup="true"
    CodeFile="products.aspx.cs" Inherits="products" Title="Products" %>

<asp:Content ID="Content1" ContentPlaceHolderID="contentplaceholderRMP" runat="Server">
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="tableClass" bgcolor="#ffffff">
        <tr>
            <td width="15">
            </td>
        </tr>
        <tr>
            <td valign="top" style="text-align: left; padding-left: 20px;">
                <h1>
                    Packages</h1>
                <p>
                    RMP Infotec MLM offers 12 excellent household products to choose from based on your
                    requirement. Once you have picked up your favorite product and purchased it from
                    RMP, you will automatically become an independent RMP distributor.<br />
                    <br />
                </p>
                <div id="mod-sub-l">
                    <%-- <div id="mod-sub-top">
                        <p>
                            <span style="margin: 0pt; float: left;">Products</span></p>
                    </div>--%>
                    <table height="180" width="555" cellspacing="0" cellpadding="0">
                        <tr>
                            <td colspan="3">
                                <div id="horiz-h1" />
                            </td>
                        </tr>
                        <tr>
                            <td width="105" valign="top" align="left">
                                <a href="reseller">
                                    <img alt="Energy Saver" src="product-images/rmp_energex_power_regulator.jpg" width="100"
                                        height="100" /></a></td>
                            <td width="15">
                            </td>
                            <td valign="top">
                                <h3 align="left">
                                    Energy Saver + Suit Length</h3>
                                <p align="left">
                                    What the household really need is an energy saving device that is effective, cost
                                    wise, high quality and durable. Suit Length comes in 3m.
                                </p>
                                <div align="left">
                                    <a href="reseller">
                                        <img alt="Learn More" src="assets/graphics/buttons/but-reslearnmore.gif" /></a>
                                    <br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding-top: 5px;">
                                <div id="horiz-h1" />
                            </td>
                        </tr>
                        <tr>
                            <td width="105" valign="top" align="left">
                                <a href="reseller">
                                    <img alt="RMP J.Hampstead Suit Length" src="product-images/suitLength.jpg" height="100"
                                        width="100" /></a></td>
                            <td width="15">
                            </td>
                            <td valign="top">
                                <h3 align="left">
                                    RMP J.Hampstead Suit Length</h3>
                                <p align="left">
                                    J-Hampstead has long been a known brand not only in India but worldwide. It is known
                                    for high-end worsted textiles that are used for making suits. Since 1995, Siyaram
                                    which originated as solely a suiting and shirting company, has acquired J-Hampstead.
                                </p>
                                <div align="left">
                                    <a href="reseller">
                                        <img alt="Learn More" src="assets/graphics/buttons/but-reslearnmore.gif" /></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding-top: 5px;">
                                <div id="horiz-h1" />
                            </td>
                        </tr>
                        <tr>
                            <td width="105" valign="top" align="left">
                                <a href="reseller">
                                    <img alt="Executive Slim Pair Watch" src="product-images/rmp_slim_pair_watch-225x300.jpg"
                                        height="100" width="100" /></a></td>
                            <td width="15">
                            </td>
                            <td valign="top">
                                <h3 align="left">
                                    Executive Slim Pair Watch</h3>
                                <p align="left">
                                    When you look for an executive watch, try the RPM line for they have a slim watch
                                    made by Swiss. Foce watches are not just for any body but for individuals who are
                                    career oriented and want to be in the stream of things.
                                </p>
                                <div align="left">
                                    <a href="reseller">
                                        <img alt="Learn More" src="assets/graphics/buttons/but-reslearnmore.gif" /></a>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <%-- <div id="mod-sub-bot" />--%>
                </div>
               
                <!--mod-sub-l-->
                <div style="clear: both;" />
            </td>
        </tr>
    </table>
</asp:Content>
