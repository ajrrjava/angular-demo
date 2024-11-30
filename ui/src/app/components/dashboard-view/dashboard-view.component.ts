import { Component, inject, OnInit, OnDestroy } from "@angular/core"
import { NgFor } from "@angular/common"
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ClarityModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { ClarityIcons, homeIcon, cloudIcon, windowCloseIcon, folderIcon, linkIcon } from '@cds/core/icon';
import { BaseViewComponent } from '../base-view/base-view.component';

import { ProjectsService, Project } from '../../services/projects.service';

ClarityIcons.addIcons(homeIcon, cloudIcon, windowCloseIcon, folderIcon, linkIcon);

@Component({
  selector: 'dashboard-view',
  standalone: true,
  imports: [RouterLink, NgFor, ClarityModule],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss'
})
export class DashboardViewComponent extends BaseViewComponent {
  public projects: Project[];

  constructor(private router: Router, private projectsService: ProjectsService) {
    super();
    this.projects = projectsService.getProjects();
  }

  onClick(url: string) {
    console.log(url);
    this.router.navigate([url]);
  }

}
