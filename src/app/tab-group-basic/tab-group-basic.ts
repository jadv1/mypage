import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { DataBases } from '../data-bases/data-bases';
import { Programming } from '../programming/programming';
import { SwPt } from '../sw-pt/sw-pt';
import { System } from '../system/system';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { GridListDynamic } from '../grid-list-dynamic/grid-list-dynamic';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { TableContents } from '../table-contents/table-contents';

@Component({  
  selector: 'app-tab-group-basic',
  styleUrl: './tab-group-basic.css',
  templateUrl: './tab-group-basic.html',
  imports: [MatTabsModule, MatIconModule, MatGridList, MatGridTile, MatCardModule, MatTableModule, TableContents]
})
export class TabGroupBasic {
  ngOnInit(): void {   
  }

  tiles = new GridListDynamic();
  db = new DataBases();
  subjectDB = this.db.getTitle().toUpperCase();
  subjectFDB = this.db.getjDBF().toUpperCase();
  subjectDBD = this.db.getjDBD().toUpperCase();
  subjectAMDB = this.db.getjMADB().toUpperCase();
  
  subjectP = (new Programming()).getTitle().toUpperCase();
  subjectSW = (new SwPt()).getTitle().toUpperCase();
  subjectSy = (new System()).getTitle().toUpperCase();
}
