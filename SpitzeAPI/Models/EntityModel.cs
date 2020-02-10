using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace SpitzeAPI.Models
{
    [BsonIgnoreExtraElements]
    public class EntityModel
    {
        
        public string Id { get; set; }
        public string Type { get; set; }
        public int ViewPortalId { get; set; }
    }
}
