import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  topic: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {topic: 'Database Relationship'},
  {topic: 'Agreggation'},
  {topic: 'Subqueries'},
  {topic: 'Columns arithmetics'},
  {topic: 'Joins'},
  {topic: 'Sets'},  
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  imports: [MatTableModule],
  selector: 'app-table-contents',
  styleUrl: './table-contents.css',
  templateUrl: './table-contents.html',
})
export class TableContents {
  headerTopic="SQL"
  displayedColumns: string[] = ['topic'];  
  dataSource = ELEMENT_DATA; 
}
