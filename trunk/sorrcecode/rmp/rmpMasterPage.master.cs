using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

public partial class rmpMasterPage : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string url = Request.Url.AbsoluteUri;

        //Style background
        string selectedStyle = "background:transparent url(ASSETS/graphics/menu/tab-on.gif) no-repeat scroll 0 0; color:#FF7216;";
        if(url.EndsWith("/") || url.Contains("index"))
            home.Attributes.Add("style", selectedStyle);
        else if(url.Contains("products"))
            products.Attributes.Add("style", selectedStyle);
        else if(url.Contains("profile"))
            profile.Attributes.Add("style", selectedStyle);
        else if (url.Contains("incomePlan"))
            incomePlan.Attributes.Add("style", selectedStyle);
        else if (url.Contains("contactUs"))
            contactUs.Attributes.Add("style", selectedStyle);
    }
}
