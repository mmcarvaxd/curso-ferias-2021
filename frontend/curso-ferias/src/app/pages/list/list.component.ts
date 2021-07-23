import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/models/contact.model';
import { ApiService } from 'src/app/services/api-service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarSuccessComponent } from 'src/app/snackbar/snackbar-success';
import { SnackbarErrorComponent } from 'src/app/snackbar/snackbar-error';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  dataSource: Contact[];

  displayedColumns: string[] = ['id', 'name', 'contactNumber', 'buttons'];

  editFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private apiService: ApiService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    this.dataSource = await this.apiService.get();
  }

  open(content, contact: Contact): void {
    try {
      this.setForm(contact);

      this.modalService.open(content).result.then(
        async (result) => {
          if (this.editFormGroup.valid) {
            await this.apiService.put({
              ...this.editFormGroup.value,
              id: contact.id,
            });
            this.dataSource = await this.apiService.get();
            this.snackBar.openFromComponent(SnackbarSuccessComponent, {
              duration: 5000,
              panelClass: ['snack-content-success'],
            });
          }
        },
        (reason) => {}
      );
    } catch {
      this.snackBar.openFromComponent(SnackbarErrorComponent, {
        duration: 5000,
        panelClass: ['snack-content-error'],
      });
    }
  }

  edit() {
    console.log('edit');
  }

  async deleteItem(id: number) {
    try {
      const dialogRef = this.dialog.open(ConfirmDialog);

      dialogRef.afterClosed().subscribe(async (result) => {
        if (result) {
          await this.apiService.delete(id);
          this.dataSource = await this.apiService.get();
          this.snackBar.openFromComponent(SnackbarSuccessComponent, {
            duration: 5000,
            panelClass: ['snack-content-success'],
          });
        }
      });
    } catch {
      this.snackBar.openFromComponent(SnackbarErrorComponent, {
        duration: 5000,
        panelClass: ['snack-content-error'],
      });
    }
  }

  add() {
    console.log('add');
  }

  private setForm(contact: Contact): void {
    this.editFormGroup = this.formBuilder.group({
      name: [contact.name, [Validators.required]],
      contactNumber: [
        contact.contactNumber,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
        ],
      ],
    });
  }
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.html',
})
export class ConfirmDialog {}
