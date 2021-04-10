import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport , WaypointResult } from './airlab.models';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AirlabService {
  private airport_service = environment.airport_service;
  private sid_service = environment.sid_service;
  private star_service = environment.star_service;

  constructor(private http: HttpClient){}

  public getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(`${this.airport_service}/airports`);
  }

  public getSIDWaypoints(icao: string): Observable<WaypointResult[]> {
    return this.http.get<WaypointResult[]>(`${this.sid_service}/sids/${icao}/waypoint/2`);
  }

  public getSTARWaypoints(icao: string): Observable<WaypointResult[]> {
    return this.http.get<WaypointResult[]>(`${this.star_service}/stars/${icao}/waypoint/2`);
  }

}
