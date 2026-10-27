import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TableContents } from '../table-contents/table-contents';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatExpansionModule, RouterLink],  
  selector: 'app-expansion-overview',
  styleUrl: './expansion-overview.css',
  templateUrl: './expansion-overview.html',
})

export class ExpansionOverview {
  bckgd = false;

  changeBckgd(event: PointerEvent) {
    
    //currentTarget My own experience, similar to HTML
    var strtmp = (""+event.currentTarget).split("/")[3]
    
    this.elements.forEach(element => {
      if(element.route==("/"+strtmp)){
        element.bckgd=!element.bckgd
      }
      else{
        element.bckgd=false
      }    
    });

  }
  readonly panelOpenState = signal(true);

  elements = [
  {topic: 'Agreggation', route: '/', bckgd: false},
  {topic: 'Database Relationship', route: '/dbrelatn', bckgd: false},
  {topic: 'Nested queries', route: '/nesq', bckgd: false},
  {topic: 'Column arithmetic', route: '/colari', bckgd: false},
  {topic: 'Joins', route: '/join', bckgd: false},
  {topic: 'Sets', route: '/sets', bckgd: false}
];
}
