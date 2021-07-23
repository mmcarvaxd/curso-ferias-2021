import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  dataSource: Contact[] = [
    { id: 1, name: 'Renato', contactNumber: '1111111111' },
  ];

  displayedColumns: string[] = ['id', 'name', 'contactNumber', 'buttons'];

  editFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
  }

  open(content, contact: Contact): void {

    this.setForm(contact)

    this.modalService.open(content).result.then((result) => {

      if(this.editFormGroup.valid) {

        console.log(this.editFormGroup.value)
      }

    }, (reason) => {
    });
  }

  edit() {
    console.log('edit');
  }

  deleteItem() {
    console.log('delete');
  }

  add() {
    console.log('add');
  }

  private setForm(contact: Contact): void {

    this.editFormGroup = this.formBuilder.group({

      name:[contact.name, [Validators.required]],
      contactNumber:[contact.contactNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })
  }
}
