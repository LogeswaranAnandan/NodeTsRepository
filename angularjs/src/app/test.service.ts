import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Http } from '@angular/http';
import {plainToClass, classToPlain} from 'class-transformer';
import { Orders } from './models/Orders';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: Http) { }
  url = 'http://localhost:3001/orders';
  async getData() {
    return await this.http.get(this.url).toPromise();
  }
}
