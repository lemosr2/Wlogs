using Microsoft.AspNetCore.Mvc;
using System;

namespace WlogsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HeartbeatController : ControllerBase
    {
        private readonly ILogger<HeartbeatController> _logger;

        public HeartbeatController(ILogger<HeartbeatController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Get() => Ok(new { Date = DateTime.Now });

    }
}