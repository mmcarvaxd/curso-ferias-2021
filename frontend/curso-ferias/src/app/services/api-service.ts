import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable()
export class ApiService {
  baseUrl = 'http://localhost:3000/contact/';

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Contact[]>(this.baseUrl).toPromise();
  }
  getById(id: number) {
    return this.http.get<Contact>(this.baseUrl + id).toPromise();
  }
  post(contact: Contact) {
    return this.http.post<Contact>(this.baseUrl, contact).toPromise();
  }
  put(contact: Contact) {
    return this.http.put<Contact>(this.baseUrl, contact).toPromise();
  }
  delete(id: number) {
    return this.http.delete<void>(this.baseUrl + id).toPromise();
  }
}
