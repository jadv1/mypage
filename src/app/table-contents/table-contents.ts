import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';


export interface PeriodicElement {
  topic: string;
  route: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {topic: 'Database Relationship', route: '/dbrelatn'},
  {topic: 'Agreggation', route: '/'},
  {topic: 'Subqueries', route: '/'},
  {topic: 'Columns arithmetics', route: '/'},
  {topic: 'Joins', route: '/join'},
  {topic: 'Sets', route: '/'}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  imports: [MatTableModule, RouterLink],
  selector: 'app-table-contents',
  styleUrl: './table-contents.css',
  templateUrl: './table-contents.html',
})
export class TableContents {
  headerTopic="SQL"
  displayedColumns: string[] = ['topic'];  
  dataSource = ELEMENT_DATA; 
}
