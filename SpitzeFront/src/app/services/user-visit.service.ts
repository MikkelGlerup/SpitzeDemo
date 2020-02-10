import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Document } from "../../models/Document";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserVisitService {

  
  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appUrl;
      
      this.myApiUrl = 'api/Document/';
  }

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getDocument(DocumentId: number): Observable<Document> {
      return this.http.get<Document>(this.myAppUrl + this.myApiUrl + DocumentId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveDocument(Document): Observable<Document> {
      return this.http.post<Document>(this.myAppUrl + this.myApiUrl, JSON.stringify(Document), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateDocument(postId: number, blogPost): Observable<Document> {
      return this.http.put<Document>(this.myAppUrl + this.myApiUrl + postId, JSON.stringify(Document), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteDocument(DocumentId: number): Observable<Document> {
      return this.http.delete<Document>(this.myAppUrl + this.myApiUrl + DocumentId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
