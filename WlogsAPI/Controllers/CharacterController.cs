using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Text;

namespace WlogsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly ILogger<CharacterController> _logger;

        public CharacterController(ILogger<CharacterController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Get(string character, string server_name, string server_region)
        {
            try
            {
                HttpClient client = new HttpClient();
                client.BaseAddress = new Uri("https://classic.warcraftlogs.com/");

                string url = $"v1/rankings/character/{character}/{server_name}/{server_region}?api_key=" + Environment.GetEnvironmentVariable("api_key");

                Task<List<Character>?> lisReturn = client.GetAsync(url).Result.Content.ReadFromJsonAsync<List<Character>>();
                lisReturn.Wait();

               return Ok(lisReturn.Result ?? new List<Character>());
            }
            catch
            {
                return Ok(new List<Character>());
            }
        }

    }

    public class Character
    {
        public int encounterID { get; set; }
        public string encounterName { get; set; }
        public string @class { get; set; }
        public string spec { get; set; }
        public int rank { get; set; }
        public int outOf { get; set; }
        public int duration { get; set; }
        public long startTime { get; set; }
        public string reportID { get; set; }
        public int fightID { get; set; }
        public int difficulty { get; set; }
        public int size { get; set; }
        public int characterID { get; set; }
        public string characterName { get; set; }
        public string server { get; set; }
        public double percentile { get; set; }
        public int ilvlKeyOrPatch { get; set; }
        public double total { get; set; }
        public bool estimated { get; set; }
    }




}