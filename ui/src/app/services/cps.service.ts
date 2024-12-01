import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MapMarker } from "../entities/MapEntities";

@Injectable({
  providedIn: 'root'
})
export class CPSService {
  private cpsUrl: string = 'https://data.cityofchicago.org/resource/ngix-dc87.json';

  constructor(private http: HttpClient) { }

  getSchools(): Observable<MapMarker[]> {
    return this.http.get(this.cpsUrl)
      .pipe(
        map((res: any) => {
          var markers: MapMarker[] = [];
          for (const s of res) {
              const marker = new MapMarker();
              marker.title = "School: " + s.long_name + "\nType: " + s.school_type;
              marker.latitude = parseFloat(s.school_latitude);
              marker.longitude = parseFloat(s.school_longitude);
              markers.push(marker);
          }
          return markers;
        })
      );
  }
}
