import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Airport , WaypointResult } from './airlab.models';
import { environment } from 'src/environments/environment';
import {catchError, } from 'rxjs/operators';''
@Injectable({providedIn: 'root'})
export class AirlabService {

  constructor(private http: HttpClient){}
  private base_uri = environment.base_uri;
  
  public getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(`${this.base_uri}/airports`).pipe(catchError(this.handleError));
  }

  public getSIDWaypoints(icao: string): Observable<WaypointResult[]> {
    return this.http.get<WaypointResult[]>(`${this.base_uri}/sids/${icao}/waypoint/2`).pipe(catchError(this.handleError));
  }

  public getSTARWaypoints(icao: string): Observable<WaypointResult[]> {
    return this.http.get<WaypointResult[]>(`${this.base_uri}/stars/${icao}/waypoint/2`).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
