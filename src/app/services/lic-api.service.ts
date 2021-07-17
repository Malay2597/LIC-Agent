import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { PolicyHolder } from '../models/policyHolder.model';
import { PolicyDetails } from '../models/policyDetails.model';

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
      .pipe(map((res: PolicyDetails) => {
        const result: PolicyHolder[] = [];
        res.policyHoldersInfo.forEach(el => {
          const obj = new PolicyHolder(el);
          result.push(obj);
        });
        return result;
      }), catchError(this.handleError));
  }

  getPolicyListByType(type: string) {
    const policyType = this.mapPolicyTypes(type);
    let params = new HttpParams();
    params = params.append('pageNumber', '1');
    params = params.append('pageSize', '300');
    return this.http
      .get(`${this.apiUrl}policyHolders`, { params })
      .pipe(map((res: PolicyDetails) => {
        const result: PolicyHolder[] = [];
        res.policyHoldersInfo.forEach(el => {
          const obj = new PolicyHolder(el);
          if (obj.status === policyType) {
            result.push(obj);
          }
        });
        return result;
      }), catchError(this.handleError));
  }

  mapPolicyTypes(type: string) {
  let mappedValue: string;
  switch (type) {
    case 'InForce':
    mappedValue = 'In Force';
    break;

    case 'Single':
    mappedValue = 'Single Premium';
    break;

    case 'Matured':
    mappedValue = 'Matured';
    break;

    case 'Surrendered':
    mappedValue = 'Surrendered';
    break;

    case 'Lapsed':
    mappedValue = 'Lapsed without Surrender Value';
    break;

    case 'Reduced':
    mappedValue = 'Reduced Paid-up';
    break;

    case 'Death':
    mappedValue = 'Death Claim';
    break;

    default:
      break;
  }
  return mappedValue;
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
