using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpitzeAPI.Models;
using SpitzeAPI.Services;

namespace SpitzeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentsController : Controller
    {
        private readonly MongoService _mongoService;
        public DocumentsController(MongoService mongoService)
        {
            _mongoService = mongoService;
        }
        [HttpGet]
        public ActionResult<List<Document>> Get() =>
            _mongoService.Get();
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("{id:length(24)}", Name = "GetBook")]
        public ActionResult<Document> Get(string id)
        {
            var document = _mongoService.Get(id);

            if (document == null)
            {
                return NotFound();
            }

            return document;
        }

        [HttpPost]
        public ActionResult<Document> Create(Document document)
        {
            _mongoService.Create(document);

            return CreatedAtRoute("GetBook", new { id = document.Id.ToString() }, document);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Document documentIn)
        {
            var document = _mongoService.Get(id);

            if (document == null)
            {
                return NotFound();
            }

            _mongoService.Update(id, documentIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var document = _mongoService.Get(id);

            if (document == null)
            {
                return NotFound();
            }

            _mongoService.Remove(document.Id);

            return NoContent();
        }
    }
}