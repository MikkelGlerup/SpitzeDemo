using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpitzeAPI.Models
{
    [BsonIgnoreExtraElements]
    public class UserModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Agent { get; set; }
    }
}
