using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult LoginTab()
        {
            ViewBag.Title = "LoginTab";

            return View();
        }

        public ActionResult PriceTab()
        {
            ViewBag.Title = "PriceTab";

            return View();
        }

        public ActionResult MapTab()
        {
            ViewBag.Title = "MapTab";

            return View();
        }

        public ActionResult VLTab()
        {
            ViewBag.Title = "VLTab";

            return View();
        }

        public ActionResult RegisterTab()
        {
            ViewBag.Title = "RegisterTab";

            return View();
        }

    }
}
