import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core"
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ClarityModule, ClrFormsModule, ClrComboboxModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { ClarityIcons, homeIcon, cloudIcon, windowCloseIcon, folderIcon, linkIcon, worldIcon, sunIcon } from '@cds/core/icon';
import { BaseViewComponent } from '../base-view/base-view.component';
import { MapComponent } from '../map/map.component';
import { MapConfig, MapMarker } from "../../entities/MapEntities";
import { CPSService, Variable, Range } from "../../services/cps.service";

ClarityIcons.addIcons(homeIcon, cloudIcon, windowCloseIcon, folderIcon, linkIcon, worldIcon, sunIcon);

@Component({
  selector: 'map-view',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule, ClarityModule, ClrFormsModule, ClrComboboxModule, MapComponent],
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
  public variables: Variable[];
  public varSelection: Variable[] = [];
  public ranges: Range[];
  public rangeSelection: Range[] = [];

  filterForm = new FormGroup({
      filterBy: new FormControl<Variable | null>(null, Validators.required),
      filterRange: new FormControl<Range | null>(null, Validators.required),
      submitSearch: new FormControl('', []),
    });

  constructor(private router: Router, private cpsService: CPSService) {
    super();
    this.variables = this.cpsService.getVariables();
    this.ranges = this.cpsService.getRanges();
  }

  ngAfterViewInit(): void {
    this.cpsService.getSchools()
    .subscribe((data: MapMarker[]) => this.data = data);
  }

  get filterBy() {
    return this.filterForm.get('filterBy');
  }

  get filterRange() {
    return this.filterForm.get('filterRange');
  }

  onSubmit() {
    const f = this.filterForm.get('filterBy');
    const r = this.filterForm.get('filterRange');

    const code = f?.value?.code as string;
    const range = r?.value?.range as number[];
    this.cpsService.getDataForVariable(code, range)
      .subscribe((data: MapMarker[]) => this.data = data);
  }
}


