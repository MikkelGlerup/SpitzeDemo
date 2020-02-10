using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpitzeAPI.Models
{
    public class MongoDatabaseSettings : IMongoDatabaseSettings
    {
        public string MongoCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    public interface IMongoDatabaseSettings
    {
        public string MongoCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
 