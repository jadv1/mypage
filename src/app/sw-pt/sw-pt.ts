import { Component, inject } from '@angular/core';
import { ExpansionOverview } from '../expansion-overview/expansion-overview';
import { contSws } from '../contentsmenues';
import { Router, RouterOutlet } from '@angular/router';
import { NonFuctionalTesting } from './pages/non-fuctional-testing/non-fuctional-testing';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [ExpansionOverview, RouterOutlet, MatIconModule],
  selector: 'app-sw-pt',
  styleUrl: './sw-pt.css',
  templateUrl: './sw-pt.html',
})

export class SwPt {
  title = contSws.title.toUpperCase(); 

  private router = inject(Router);
  navigateToProfile() {
    this.router.navigate(['/'], {replaceUrl: true});
  }

  ngOnInit(): void {
    this.navigateToProfile()
  }

  ismenusub = false;
  constructor(){
    this.ismenusub=this.displayContent()
  }
  displayContent(){
    return this.ismenusub = !this.ismenusub;
  }  
    
}
