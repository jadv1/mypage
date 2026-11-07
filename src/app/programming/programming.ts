import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  imports: [MatSidenavModule],
  selector: 'app-programming',
  styleUrl: './programming.css',
  templateUrl: './programming.html',
  template: `
    <h2>Test</h2>
  `,
})
export class Programming {
  title = "programming"
  getTitle(){
    return this.title;
  }  
}
