import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OpenService {

  count = 0;

  constructor(
    private http: HttpClient
  ) { }

  categories() {
    return this.http
      .get('https://api.publicapis.org/categories');
  }

  add() {
    this.count++;
  }
}
