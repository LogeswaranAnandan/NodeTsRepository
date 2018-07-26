import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {plainToClass, classToPlain} from 'class-transformer';
import { Orders } from '../models/Orders';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  constructor(private testService: TestService) { }
  order: Orders[];
  productNumber: number;
  async getData() {
    try {
    const response = await this.testService.getData();
    console.log(response.headers);
    this.order = plainToClass(Orders, response.json());
    console.log(response);
    console.log(this.order);
    } catch (err) {
      console.log(err);
    }
  }

  ngOnInit() {
    this.productNumber = 0;
    this.getData();
  }

}
