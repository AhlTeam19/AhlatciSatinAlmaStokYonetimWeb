using Microsoft.AspNetCore.Mvc;
using SatinAlmaStokYonetim.Models;
using SatinAlmaStokYonetim.Web.Models;
using System.Text.Json;

namespace SatinAlmaStokYonetim.Web.Controllers
{
    public class RequestController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> GetbyCompanyId([FromBody] CompDepId id)
        {
            using HttpClient client = new HttpClient();

            client.BaseAddress = new Uri("http://localhost:5208");

            string uri = $"{client.BaseAddress}requests/getbyCompandDep?companyId={id.companyId}&departmentId={id.departmentId}";

            var httpResponseMessage = await client.GetAsync(uri);
                
            var contentData = await httpResponseMessage.Content.ReadAsStringAsync();

            var jsonData = JsonSerializer.Deserialize<ResponseBody<List<RequestItem>>>(contentData,

                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return Json(jsonData!.data);
        }
    }
}
