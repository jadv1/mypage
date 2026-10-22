import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBases } from './data-bases/data-bases';
import { TabGroupBasic } from './tab-group-basic/tab-group-basic';

@Component({
  imports: [DataBases, TabGroupBasic],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myweb');
}
