import { Component, inject, OnInit, OnDestroy } from "@angular/core"
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'earthquakes',
  standalone: true,
  imports: [ClarityModule],
  templateUrl: './earthquakes.component.html',
  styleUrl: './earthquakes.component.scss'
})
export class EarthquakesComponent {

  constructor(private router: Router){
  }
}
