import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserVisitService {

  constructor() {

   }
}
var Document = {
  Id: String,
  Timestamp: String,
  TargetUrl: String,
  RerferralUrl: String,
  EntityModel: String,
  Operation: OperationModel,
  User: UserModel,
  _rid: String,
  _self: String,
  _etag: String,
  _attachments: String,
  _ts: Number
}
var OperationModel = {
Type: String,
SearchResultCount: Number,
SearchTerm: String
}
var UserModel = {
Id: Number,
Name: String,
Agent: String
}
var TenantModel = {
Name: String,
TenantId: String,
ApiUser: String
}