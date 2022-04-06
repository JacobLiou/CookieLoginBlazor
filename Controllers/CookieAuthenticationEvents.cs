using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApplication.Controllers
{
    public class CookieAuthenticationEvents : Microsoft.AspNetCore.Authentication.Cookies.CookieAuthenticationEvents
    {
        //private readonly Factory _factory;

        //public CookieAuthenticationEvents(Factory factory)
        //{
        //    _factory = factory;
        //}

        public override async Task ValidatePrincipal(CookieValidatePrincipalContext context)
        {
            // Validate the Principal
            var userPrincipal = context.Principal;

            // If not valid, Sign out
            if (userPrincipal.Identity.Name != "denis@voituron.net")
            {
                context.RejectPrincipal();
                await context.HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            }
        }
    }
}
