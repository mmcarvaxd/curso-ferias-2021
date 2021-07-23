import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ApiService } from 'src/app/services/api-service';
import { SnackbarErrorComponent } from 'src/app/snackbar/snackbar-error';
import { SnackbarSuccessComponent } from 'src/app/snackbar/snackbar-success';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  formSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  /**
   * Function called in the form submit,
   * calls the back end to register a contact in the database
   * if the formGroup is valid.
   */
  async registerContact() {
    try {
      this.formSubmitted = true;

      if (this.registerFormGroup.valid) {
        let contact: Contact = this.registerFormGroup.value as Contact;

        await this.apiService.post(contact);
        this.snackBar.openFromComponent(SnackbarSuccessComponent, {
          duration: 5000,
          panelClass: ['snack-content-success'],
        });
        this.router.navigate(['']);
      }
    } catch {
      this.snackBar.openFromComponent(SnackbarErrorComponent, {
        duration: 5000,
        panelClass: ['snack-content-error'],
      });
    }
  }

  /**
   * Private function, sets the formGroup in the ngOnInit function.
   */
  private setForm(): void {
    this.registerFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      contactNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
        ],
      ],
    });
  }
}
