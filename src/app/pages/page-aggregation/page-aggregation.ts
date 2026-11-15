import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { GridListDynamic } from '../../grid-list-dynamic/grid-list-dynamic';
import { CardOverview } from '../../card-overview/card-overview';
import { MatIcon } from '@angular/material/icon';


@Component({
  imports: [MatGridListModule, MatCardModule, CardOverview],
  selector: 'app-page-aggregation',
  styleUrl: './page-aggregation.css',
  templateUrl: './page-aggregation.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PageAggregation implements OnInit{
// focusoutM() {

//   this.disappearbut()
// }
  
ngOnInit(): void {
}

  tiles = new GridListDynamic();
}
