import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-system',
  styleUrl: './system.css',
  templateUrl: './system.html',
})
export class System {
  title = "system admin."
  getTitle(){
    return this.title;
  }  
}
