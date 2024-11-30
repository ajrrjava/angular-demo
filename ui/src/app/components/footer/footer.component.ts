import { Component } from "@angular/core"
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClrFormsModule, ClrDropdownModule, ClarityModule } from '@clr/angular';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators  } from '@angular/forms';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [FormsModule, ClrFormsModule, ClrDropdownModule, ClarityModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router, private formBuilder: FormBuilder) {

  }
}
