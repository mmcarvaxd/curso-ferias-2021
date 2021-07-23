import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup
  formSubmitted: boolean = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.setForm()
  }

  /**
   * Function called in the form submit,
   * calls the back end to register a contact in the database
   * if the formGroup is valid.
   */
  registerContact(): void {

    this.formSubmitted = true

    if(this.registerFormGroup.valid) {

      let contact: Contact = this.registerFormGroup.value as Contact

      console.log(contact)
    }
  }

  /**
   * Private function, sets the formGroup in the ngOnInit function.
   */
  private setForm(): void {

    this.registerFormGroup = this.formBuilder.group({

      name:['', [Validators.required]],
      contactNumber:['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })
  }
}
