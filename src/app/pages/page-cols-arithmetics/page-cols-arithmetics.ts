import { Component } from '@angular/core';
import { App } from '../../app';

@Component({
  imports: [],
  selector: 'app-page-cols-arithmetics',
  styleUrl: './page-cols-arithmetics.css',
  templateUrl: './page-cols-arithmetics.html',
})
export class PageColsArithmetics {
  msgprogress = (new App()).msgprogress;
}
