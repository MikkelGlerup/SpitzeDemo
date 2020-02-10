using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SpitzeAPI.Models
{
    [BsonIgnoreExtraElements]
    public class Document
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Timestamp { get; set; }
        public string TargetUrl { get; set; }
        public string RerferralUrl { get; set; }
        public EntityModel Entity { get; set; }
        public OperationModel Operation { get; set; }
        public UserModel User { get; set; }
        public TenantModel Tenant { get; set; }
        public string _rid { get; set; }
        public string _self { get; set; }
        public string _etag { get; set; }
        public string _attachments { get; set; }
        public long _ts { get; set; }
    }
}
