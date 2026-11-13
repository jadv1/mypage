import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { contSws } from '../../../../contentsmenues';

@Component({
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  selector: 'app-cardfunctional',
  styleUrl: './cardfunctional.css',
  templateUrl: './cardfunctional.html',
})
export class Cardfunctional {
  topicfunc = contSws.topicfunc
}
