import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../Service/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public  name;
  public message1;
  public message2;
  public age;
  public list = [1, 2, 3, 4];
  constructor(private service: CommentService) {
    this.name = service.name;
    this.message1 = service.message1;
    this.message2 = service.message2;
    this.age = service.age;
  }

  ngOnInit(): void {
  }
  public tempUpdate(): void {
   this.service.age++;
   this.age = this.service.age;
  }
  public tempDown(): void {
    this.service.age--;
    this.age = this.service.age;
  }

  public upCase(): void {
    this.name = this.service.name.toUpperCase();
    this.message1 = this.service.message1.toUpperCase();
    this.message2 = this.service.message2.toUpperCase();
  }
  public downCase(): void {
    this.name = this.service.name.toLowerCase();
    this.message1 = this.service.message1.toLowerCase();
    this.message2 = this.service.message2.toLowerCase();
  }
}
