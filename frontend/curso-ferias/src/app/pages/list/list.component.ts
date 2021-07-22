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
    { id: 1, name: 'Renato', contactNumber: '111111111' },
  ];

  displayedColumns: string[] = ['id', 'name', 'contactNumber', 'buttons'];

  editFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
  }

  open(content): void {

    this.editFormGroup = this.formBuilder.group({

      name:['', [Validators.required]],
      contactNumber:['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })

    this.modalService.open(content).result.then(result => {}, reason => {})
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
}
