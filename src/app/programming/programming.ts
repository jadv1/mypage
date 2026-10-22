import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-programming',
  styleUrl: './programming.css',
  templateUrl: './programming.html',
})
export class Programming {
  title = "programming"
  getTitle(){
    return this.title;
  }  
}
