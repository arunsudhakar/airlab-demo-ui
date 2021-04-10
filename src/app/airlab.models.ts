export interface Airport {
    uid: string;
    name: String;
    iata: string;
    icao: string;
    lat: number;
    lng: number;
    alt: number;
}

export interface TopWaypoint {
    name: String;
    count: number;
}

export interface WaypointResult {
    airport: string;
    topWaypoints: TopWaypoint[];
}
  
