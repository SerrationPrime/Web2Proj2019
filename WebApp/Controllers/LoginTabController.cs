﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp.Controllers
{
    public class LoginTabController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            ViewBag.Title = "LoginTab";

            return View();
        }
    }
}