import { Component, OnInit } from '@angular/core';
import { Airport , WaypointResult } from './airlab.models';
import { AirlabService } from './airlab.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public airports: Airport[];
  public sidsWaypointResult: WaypointResult[];
  public starsWaypointResult: WaypointResult[];
  public airportName: string;
  selectedAirport?: string;

  constructor(private AirlabService: AirlabService){}

  ngOnInit() {
    this.getAirports();
  }

  public getAirports(): void {
    this.AirlabService.getAirports().subscribe(
      (response: Airport[]) => {
        this.airports = response;
        console.log(this.airports);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onSelect(airport): void {
    this.selectedAirport = airport.target.value
    this.AirlabService.getSIDWaypoints(this.selectedAirport).subscribe(
      (response: WaypointResult[]) => {
        this.sidsWaypointResult = response;
        console.log(this.sidsWaypointResult);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    this.AirlabService.getSTARWaypoints(this.selectedAirport).subscribe(
      (response: WaypointResult[]) => {
        this.starsWaypointResult = response;
        console.log(this.starsWaypointResult);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }
}

