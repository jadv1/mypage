import { Component, inject, OnInit } from '@angular/core';
import { ExpansionOverview } from '../expansion-overview/expansion-overview';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { contDB } from '../contentsmenues';

@Component({
  imports: [ExpansionOverview, MatIconModule, RouterOutlet],
  selector: 'app-data-bases',
  styleUrl: './data-bases.css',
  templateUrl: './data-bases.html',
})

export class DataBases implements OnInit{
  title = contDB.title.toUpperCase()
  displaynone=true;

  onNotify(){
    this.displaynone = true;
  }

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

  // getNavSQL(){
  //   return this.arrobtree
  // }
}


