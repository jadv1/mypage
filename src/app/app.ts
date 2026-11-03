import { Component, Input, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabGroupBasic } from './tab-group-basic/tab-group-basic';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatTabGroup, MatTabsModule, MatTabHeader, MatTabBody } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { DataBases } from './data-bases/data-bases';
import { GridListDynamic } from './grid-list-dynamic/grid-list-dynamic';
import { Programming } from './programming/programming';
import { SwPt } from './sw-pt/sw-pt';
import { System } from './system/system';
import { PageDbRelationship } from './pages/page-db-relationship/page-db-relationship';
import { ExpansionOverview } from './expansion-overview/expansion-overview';
import { MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule, MatMenu } from '@angular/material/menu';


@Component({
  imports: [MatMenuModule, MatDividerModule, MatListModule, RouterOutlet, MatTabGroup, 
    MatTabsModule, MatGridListModule, ExpansionOverview, MatCardHeader, MatTabHeader, 
    MatCardModule, MatExpansionModule, MatIconModule, MatTreeModule, MatMenu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myweb');
  msgprogress = "Development in progress!"
  

  tiles = new GridListDynamic();
  db = new DataBases();
  subjectDB = this.db.getTitle().toUpperCase();
    
  subjectP = (new Programming()).getTitle().toUpperCase();
  subjectSW = (new SwPt()).getTitle().toUpperCase();
  subjectSy = (new System()).getTitle().toUpperCase();

  getMsgImprogre(){
    return this.msgprogress;
  }
}
