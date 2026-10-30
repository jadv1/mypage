import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  imports: [MatGridListModule],
  selector: 'app-grid-list-dynamic',
  styleUrl: './grid-list-dynamic.css',
  templateUrl: './grid-list-dynamic.html',
})

export class GridListDynamic {
    tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 4, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#948A54'},
    {text: 'Five', cols: 4, rows: 2, color: '#948A54'},
  ];

  getTiles(){
    return this.tiles;
  }
}
