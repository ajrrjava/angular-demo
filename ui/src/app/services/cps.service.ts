import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MapMarker } from "../entities/MapEntities";

export interface Range {
  label: string;
  range: number[];
}

export interface Variable {
  label: string;
  code: string;
}

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


  getVariables(): Variable[] {
    return [
      {
        label: 'Student Attendance',
        code: 'student_attendance_year_2',
      },
      {
        label: 'Teacher Attendance',
        code: 'teacher_attendance_year_2',
      },
      {
        label: 'Chronic Truancy',
        code: 'chronic_truancy_pct',
      },
    ];
  }

  getRanges(): Range[] {
    return [
      {
        label: '0 - 50 %',
        range: [0, 50],
      },
      {
        label: '51 - 60 %',
        range: [51, 60],
      },
      {
        label: '61 - 80 %',
        range: [61, 80],
      },
      {
        label: '81 - 100 %',
        range: [81, 100],
      },
    ];
  }

  getDataForVariable(code: string, range: number[]): Observable<MapMarker[]> {
    return this.http.get(this.cpsUrl)
      .pipe(
        map((res: any) => {
          var markers: MapMarker[] = [];
          const r = res.filter((s: any) => {
            if(s[code] != null && s[code] != undefined) {
              return parseFloat(s[code]) >= range[0] && parseFloat(s[code]) <= range[1];
            }
            return false;
          });

          for (const s of r) {
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
