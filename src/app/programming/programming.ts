import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ExpansionOverview } from '../expansion-overview/expansion-overview';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { contProg } from '../contentsmenues';

@Component({
  imports: [MatSidenavModule, MatIconModule],
  selector: 'app-programming',
  styleUrl: './programming.css',
  templateUrl: './programming.html',
  template: `
    <h2>Test</h2>
  `,
})
export class Programming {
  title = contProg.title
}
