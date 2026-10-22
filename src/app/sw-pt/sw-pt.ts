import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sw-pt',
  styleUrl: './sw-pt.css',
  templateUrl: './sw-pt.html',
})
export class SwPt {
  title = "Testing"
  getTitle(){
    return this.title;
  }  
}
