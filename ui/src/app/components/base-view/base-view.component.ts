import { Component, inject, OnInit, OnDestroy } from "@angular/core"
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'base-view',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './base-view.component.html',
  styleUrl: './base-view.component.scss'
})
export class BaseViewComponent implements OnInit, OnDestroy {

  // Internal variables
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit() {

  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    console.log("parent destroyed")
  }
}
