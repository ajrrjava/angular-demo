import { Component } from "@angular/core"
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClrFormsModule, ClrDropdownModule, ClarityModule } from '@clr/angular';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators  } from '@angular/forms';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'login-participant',
  standalone: true,
  imports: [FormsModule, ClrFormsModule, ClrDropdownModule, ClarityModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form : FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', []], //, [Validators.required, Validators.email]],
      code: ['', []], //, Validators.required]
    });
  }

  onSubmit() {
    this.authService.login(this.router.url);
   // console.log(this.form.value);

    if( this.authService.isAuthenticated()) {
      this.router.navigate(['/planets']);
    }
  }
}
