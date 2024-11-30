import { Component, inject, OnInit, AfterViewInit } from "@angular/core"
import { BehaviorSubject, ReplaySubject } from 'rxjs';

import { BaseViewComponent } from '../base-view/base-view.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'planets-view',
  standalone: true,
  providers: [],
  imports: [BaseViewComponent, TableComponent],
  templateUrl: './planets-view.component.html',
  styleUrl: './planets-view.component.scss'
})
export class PlanetsViewComponent extends BaseViewComponent {

  constructor() {
    super();
  }
  ngAfterViewInit() {

  }
}

