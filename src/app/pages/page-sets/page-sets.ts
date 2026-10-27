import { Component } from '@angular/core';
import { App } from '../../app';

@Component({
  imports: [],
  selector: 'app-page-sets',
  styleUrl: './page-sets.css',
  templateUrl: './page-sets.html',
})
export class PageSets {
  msgprogress = (new App()).msgprogress;
}
