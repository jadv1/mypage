import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCell } from '@angular/material/table';

@Component({
  imports: [MatCardModule],
  selector: 'app-card-overview',
  styleUrl: './card-overview.css',
  templateUrl: './card-overview.html',
})
export class CardOverview {}
