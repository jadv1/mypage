import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { DataBases } from '../data-bases/data-bases';
import { Programming } from '../programming/programming';
import { SwPt } from '../sw-pt/sw-pt';
import { System } from '../system/system';

@Component({  
  selector: 'app-tab-group-basic',
  styleUrl: './tab-group-basic.css',
  templateUrl: './tab-group-basic.html',
  imports: [MatTabsModule,MatIconModule]
})
export class TabGroupBasic {
  ngOnInit(): void {   
  }
  
  subjectFDB = (new DataBases()).getTitle().toUpperCase();
  subjectP = (new Programming()).getTitle().toUpperCase();
  subjectSW = (new SwPt()).getTitle().toUpperCase();
  subjectSy = (new System()).getTitle().toUpperCase();
}
