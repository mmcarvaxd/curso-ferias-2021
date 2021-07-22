import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  nameInput: string = ''

  registerFormGroup: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  printName(): void {

    console.log(this.nameInput)
  }
}
