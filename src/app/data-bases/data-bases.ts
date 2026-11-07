import { Component } from '@angular/core';
import { ExpansionOverview } from '../expansion-overview/expansion-overview';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [ExpansionOverview, MatIconModule, RouterOutlet],
  selector: 'app-data-bases',
  styleUrl: './data-bases.css',
  templateUrl: './data-bases.html',
})

export class DataBases {
  title = "Database"
  subjFBD = "DB Fundamentals"
  subjDBD = "Design DB"
  subjMADB = "Management & Admin. DB" 
  constructor(){
    this.ismenusub=this.displayContent()
  }

  ismenusub = false;
  
  displayContent(){
    return this.ismenusub = !this.ismenusub;
  }

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


