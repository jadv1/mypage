import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';


export interface PeriodicElement {
  topic: string;
  route: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {topic: 'Agreggation', route: '/'},
  {topic: 'Database Relationship', route: '/dbrelatn'},
  {topic: 'Subqueries', route: '/subq'},
  {topic: 'Columns arithmetics', route: '/colari'},
  {topic: 'Joins', route: '/join'},
  {topic: 'Sets', route: '/sets'}
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
