using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpitzeAPI.Models
{
    public class OperationModel
    {
        public string Type { get; set; }
        public int SearchResultCount { get; set; }
        public string? SearchTerm { get; set; }
    }
}
