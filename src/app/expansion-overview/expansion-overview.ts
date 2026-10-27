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
  readonly panelOpenState = signal(true);

  elements = [
  {topic: 'Agreggation', route: '/'},
  {topic: 'Database Relationship', route: '/dbrelatn'},
  {topic: 'Nested queries', route: '/nesq'},
  {topic: 'Column arithmetic', route: '/colari'},
  {topic: 'Joins', route: '/join'},
  {topic: 'Sets', route: '/sets'}
];
}
