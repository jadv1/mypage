import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBases } from './data-bases/data-bases';
import { TabGroupBasic } from './tab-group-basic/tab-group-basic';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  imports: [TabGroupBasic, MatDividerModule, MatListModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myweb');
}
