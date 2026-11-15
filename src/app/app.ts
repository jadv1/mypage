import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatTabGroup, MatTabsModule, MatTabHeader } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamic } from './grid-list-dynamic/grid-list-dynamic';
import { MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule, MatMenu } from '@angular/material/menu';
import { contDB, contProg, contSws, contSys, myname } from './contentsmenues';


@Component({
  imports: [MatMenuModule, MatDividerModule, MatListModule, 
            RouterOutlet, MatTabGroup, MatTabsModule, 
            MatGridListModule, MatCardHeader, MatTabHeader,
            MatCardModule, MatExpansionModule, MatIconModule, 
            MatTreeModule, MatMenu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  constructor(){   
  }
  readonly myname = myname;
  protected readonly title = signal('myweb');
  msgprogress = "Development in progress!"

  tiles = new GridListDynamic();  
  subjectDB = contDB.title.toUpperCase();
  subjectP = contProg.title.toUpperCase();
  subjectSW = contSws.title.toUpperCase();
  subjectSy = contSys.title.toUpperCase();

  getMsgImprogre(){
    return this.msgprogress;
  }
  
}
