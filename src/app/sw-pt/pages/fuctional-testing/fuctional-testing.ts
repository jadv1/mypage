import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SwPt } from '../../sw-pt';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Cardfunctional } from './cardfunctional/cardfunctional';

interface SubjectNode {
  otopic: {};
  children?: SubjectNode[];  
}

@Component({
  imports: [MatExpansionModule, MatTreeModule, MatIconModule, Cardfunctional],
  selector: 'app-fuctional-testing',
  styleUrl: './fuctional-testing.css',
  templateUrl: './fuctional-testing.html',
})
export class FuctionalTesting { 
}
