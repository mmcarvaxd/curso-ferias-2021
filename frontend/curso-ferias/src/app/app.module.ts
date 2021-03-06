import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialog, ListComponent } from './pages/list/list.component';
import { RegisterComponent } from './pages/register/register.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api-service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent, ListComponent, RegisterComponent, ConfirmDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Materials sendo usados no projeto:
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    NgxMaskModule.forRoot(),

    //Importantes para controle de formulários no angular!!
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
