import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-data-bases',
  styleUrl: './data-bases.css',
  templateUrl: './data-bases.html',
})
export class DataBases {
  title = "Database"
  subjFBD = "DB Fundamentals"
  subjDBD = "Design DB"
  subjMADB = "Management & Admin. DB" 

  getjDBF(){
    return this.subjFBD;
  }
  getjDBD(){
    return this.subjDBD;
  }    
  getjMADB(){
    return this.subjMADB;
  }
  getTitle(){
    return this.title;
  }
}
