import { Component, Input, OnInit, AfterViewInit } from "@angular/core"
import { BehaviorSubject, ReplaySubject, takeUntil } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS */
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'str-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  // External variables
  @Input() $data: BehaviorSubject<any> = new BehaviorSubject<any>("");

  // Internal variables
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

 rowData = [
  //{ make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //{ make: "Ford", model: "F-Series", price: 33850, electric: false },
  //{ make: "Toyota", model: "Corolla", price: 29600, electric: false },
 ];

   // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];

  ngAfterViewInit() {
    this.$data
    .pipe(takeUntil(this.destroyed$))
    .subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

