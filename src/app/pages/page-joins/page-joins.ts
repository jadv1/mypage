import { Component } from '@angular/core';
import { App } from '../../app';

@Component({
  imports: [],
  selector: 'app-page-joins',
  styleUrl: './page-joins.css',
  templateUrl: './page-joins.html',
})
export class PageJoins {
  msgprogress = (new App()).msgprogress;
}
