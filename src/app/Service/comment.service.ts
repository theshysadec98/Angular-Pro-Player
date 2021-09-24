import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public name:string = "Trungdle";
  public message1:string = "may bi ngu a";
  public message2:string = "may chua bi ngu dau";
  public age:number = 21;
  constructor() { }

  public tempUpdate(): void {
    this.age++;
   }
   public tempDown(): void {
     this.age--;
   }

   public upCase(): void {
     this.name = this.name.toUpperCase();
     this.message1 = this.message1.toUpperCase();
     this.message2 = this.message2.toUpperCase();
   }
   public downCase(): void {
     this.name = this.name.toLowerCase();
     this.message1 = this.message1.toLowerCase();
     this.message2 = this.message2.toLowerCase();
   }
}
