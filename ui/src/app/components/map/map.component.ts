import { Component, OnInit, AfterViewInit, OnDestroy, input, effect } from "@angular/core";
import { MapConfig, MapMarker } from "../../entities/MapEntities";
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

@Component({
  selector: 'map-block',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit, AfterViewInit {
  // Input data
  mapConfig = input<MapConfig>(new MapConfig());
  data = input<MapMarker[]>([]);

  public map: any;
  public timestamp: any;
  private layerGroup = L.layerGroup();

  constructor() {
    effect(() => {
      if (this.map.hasLayer(this.layerGroup)) {
        this.layerGroup.clearLayers();
        this.map.removeLayer(this.layerGroup);
      }

      for(let d of this.data()) {
        const marker = L.marker([d.latitude, d.longitude], {
          title: d.title,
          icon: iconDefault,
          opacity: d.opacity
        });

        this.layerGroup.addLayer(marker);
      }

      this.map.addLayer(this.layerGroup);
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.mapConfig().latitude, this.mapConfig().longitude],
      zoom: this.mapConfig().zoom,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: this.mapConfig().maxZoom,
      minZoom: this.mapConfig().minZoom,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}



