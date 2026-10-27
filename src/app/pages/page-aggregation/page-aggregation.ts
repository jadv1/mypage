import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { TableContents } from '../../table-contents/table-contents';
import { GridListDynamic } from '../../grid-list-dynamic/grid-list-dynamic';
import { CardOverview } from '../../card-overview/card-overview';

@Component({
  imports: [MatGridListModule, MatCardModule, CardOverview],
  selector: 'app-page-aggregation',
  styleUrl: './page-aggregation.css',
  templateUrl: './page-aggregation.html',
})
export class PageAggregation {

  tiles = new GridListDynamic();
}
