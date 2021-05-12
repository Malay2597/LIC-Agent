import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { PolicyHolder } from '../models/policyHolder.model';

@Injectable({
  providedIn: 'root',
})
export class LicApiService {
  constructor(private http: HttpClient) { }
  apiUrl = 'https://lic-node.herokuapp.com/';

  getPolicyDetails(pageNumber = 1, pageSize: number): Observable<PolicyHolder[]> {
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http
      .get(`${this.apiUrl}policyHolders`, { params })
      .pipe(map((res: object[]) => {
        const result: PolicyHolder[] = [];
        res.forEach(el => {
          const obj = new PolicyHolder(el);
          result.push(obj);
        });
        return result;
      }), catchError(this.handleError));
  }

  getDueList(month = 1): Observable<PolicyHolder[]> {
    let params = new HttpParams();
    params = params.append('month', month.toString());
    return this.http
      .get(`${this.apiUrl}due-list`, { params })
      .pipe(map((res: object[]) => {
        const result: PolicyHolder[] = [];
        res.forEach(el => {
          const obj = new PolicyHolder(el);
          result.push(obj);
        });
        return result;
      }), catchError(this.handleError));
  }


  // error handling
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error.message && typeof err.error.message === 'string') {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
