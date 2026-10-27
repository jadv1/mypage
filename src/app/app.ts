import { Component, Input, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabGroupBasic } from './tab-group-basic/tab-group-basic';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { TableContents } from './table-contents/table-contents';
import { PageAggregation } from './pages/page-aggregation/page-aggregation';
import { DataBases } from './data-bases/data-bases';
import { GridListDynamic } from './grid-list-dynamic/grid-list-dynamic';
import { Programming } from './programming/programming';
import { SwPt } from './sw-pt/sw-pt';
import { System } from './system/system';
import { PageDbRelationship } from './pages/page-db-relationship/page-db-relationship';
import { ExpansionOverview } from './expansion-overview/expansion-overview';

@Component({
  imports: [MatDividerModule, MatListModule, RouterOutlet, MatTabGroup, MatTabsModule, MatGridListModule, TableContents, ExpansionOverview],
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
  subjectFDB = this.db.getjDBF().toUpperCase();
  subjectDBD = this.db.getjDBD().toUpperCase();
  subjectAMDB = this.db.getjMADB().toUpperCase();
  
  subjectP = (new Programming()).getTitle().toUpperCase();
  subjectSW = (new SwPt()).getTitle().toUpperCase();
  subjectSy = (new System()).getTitle().toUpperCase();

  getMsgImprogre(){
    return this.msgprogress;
  }
}
