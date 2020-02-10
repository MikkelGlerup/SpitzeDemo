export class Document {
   
        Id: String
        Timestamp: String
        TargetUrl: String
        RerferralUrl: String
        EntityModel: String
        Operation: OperationModel
        User: UserModel
        _rid: String
        _self: String
        _etag: String
        _attachments: String
        _ts: Number
      }
     
export class OperationModel{
    Type: String
      SearchResultCount: Number
      SearchTerm: String
}
export class UserModel{
      Id: Number
      Name: String
      Agent: String
}
export class TenantModel{
    Name: String
      TenantId: String
      ApiUser: String
}