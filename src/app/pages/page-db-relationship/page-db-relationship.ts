import { Component, Input } from '@angular/core';
import { App } from '../../app';

@Component({
  imports: [],
  selector: 'app-page-db-relationship',
  styleUrl: './page-db-relationship.css',
  templateUrl: './page-db-relationship.html',
})
export class PageDbRelationship {  
   msgprogress = (new App()).msgprogress;
}
