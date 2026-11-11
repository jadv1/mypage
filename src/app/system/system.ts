import { Component } from '@angular/core';
import { contSys } from '../contentsmenues';

@Component({
  imports: [],
  selector: 'app-system',
  styleUrl: './system.css',
  templateUrl: './system.html',
})
export class System {
  title = contSys.title  
}
