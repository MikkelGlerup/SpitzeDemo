using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SpitzeAPI.Models;
using MongoDB.Driver;

namespace SpitzeAPI.Services
{
    public class MongoService
    {
        private readonly IMongoCollection<Document> _documents;

        public MongoService(IMongoDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _documents = database.GetCollection<Document>(settings.MongoCollectionName);
        }
        public List<Document> Get() =>
            _documents.Find(document => true).ToList();

        public Document Get(string id) =>
            _documents.Find<Document>(document => document.Id == id).FirstOrDefault();

        public Document Create(Document document)
        {
            _documents.InsertOne(document);
            return document;
        }

        public void Update(string id, Document documentIn) =>
            _documents.ReplaceOne(document => document.Id == id, documentIn);

        public void Remove(Document documentIn) =>
            _documents.DeleteOne(document => document.Id == documentIn.Id);

        public void Remove(string id) =>
            _documents.DeleteOne(document => document.Id == id);
    }
}
