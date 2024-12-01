import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core"
import { Router, RouterLink } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { ClarityIcons, homeIcon, cloudIcon, windowCloseIcon, folderIcon, linkIcon } from '@cds/core/icon';
import { BaseViewComponent } from '../base-view/base-view.component';
import { MapComponent } from '../map/map.component';
import { MapConfig, MapMarker } from "../../entities/MapEntities";
import { CPSService } from "../../services/cps.service";

ClarityIcons.addIcons(homeIcon, cloudIcon, windowCloseIcon, folderIcon, linkIcon);

@Component({
  selector: 'map-view',
  standalone: true,
  imports: [RouterLink, ClarityModule, MapComponent],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss'
})
export class MapViewComponent extends BaseViewComponent {
  public mapConfig: MapConfig = {
    title : "CPS - Progress Report 2021",
    latitude : 41.881832,
    longitude : -87.623177,
    zoom : 10,
    minZoom : 8,
    maxZoom : 15,
  };

  public data: MapMarker[] = [];

  constructor(private router: Router, private cpsService: CPSService) {
    super();
  }

  ngAfterViewInit(): void {
    this.cpsService.getSchools()
    .subscribe((data: MapMarker[]) => this.data = data);
  }
}


