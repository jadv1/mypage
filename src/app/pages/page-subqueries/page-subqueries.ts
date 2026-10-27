import { Component } from '@angular/core';
import { App } from '../../app';

@Component({
  imports: [],
  selector: 'app-page-subqueries',
  styleUrl: './page-subqueries.css',
  templateUrl: './page-subqueries.html',
})
export class PageSubqueries {
  msgprogress = (new App()).msgprogress;
}
