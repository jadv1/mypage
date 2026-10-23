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
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 2, color: '#DDBDF1'},
  ];

  getTiles(){
    return this.tiles;
  }
}
