import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-data-bases',
  styleUrl: './data-bases.css',
  templateUrl: './data-bases.html',
})
export class DataBases {
  title = "Database Fundamentals"
  getTitle(){
    return this.title;
  }
}
