export class MapConfig {
  title: string = "";
  latitude: number = 0;
  longitude: number = 0;
  zoom: number = 10;
  minZoom: number = 10;
  maxZoom: number = 10;
}

export class MapMarker {
  title: string = "";
  latitude: number = 0;
  longitude: number = 0;
  opacity: number = 1.0;
  riseOnHover: boolean = false;
}
