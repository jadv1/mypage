import { Component, Input, OnInit, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { DataBases } from '../data-bases/data-bases';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

interface SubjectNode {
  otopic: {};
  children?: SubjectNode[];  
}


@Component({
  imports: [MatExpansionModule, RouterLink, MatTreeModule, MatButtonModule, MatIconModule],  
  selector: 'app-expansion-overview',
  styleUrl: './expansion-overview.css',
  templateUrl: './expansion-overview.html',
})


export class ExpansionOverview  implements OnInit {
  bckgd = false;

  ngOnInit(): void{
    for (let i = 0; i < this.elemCate.length; i++) {
      this.dataSource[i].otopic = this.elemCate[i];      
    }
  }

  @Input() title: string | undefined

  //Constants
  db = new DataBases();
  subjectDB = this.db.getTitle().toUpperCase();
  subjectFDB = this.db.getjDBF().toUpperCase();
  subjectDBD = this.db.getjDBD().toUpperCase();
  subjectAMDB = this.db.getjMADB().toUpperCase();

  arrsubsubjests = [{sb: this.subjectFDB}, 
                    {sb: this.subjectDBD}, 
                    {sb: this.subjectAMDB}]
                    
  
  
  arrobtree = [{otopic: {topic: 'Agreggation', route: '/', bckgd: true}},
               {otopic: {topic: 'Database Relationship', route: '/dbrelatn', bckgd: false}},
               {otopic: {topic: 'Nested queries', route: '/nesq', bckgd: false}},
               {otopic: {topic: 'Column arithmetic', route: '/colari', bckgd: false}},
               {otopic: {topic: 'Joins', route: '/join', bckgd: false}},
               {otopic: {topic: 'Sets', route: '/sets', bckgd: false}}]
  //End Constants

  elemCate=["SQL"] 
  dataSource: SubjectNode[] =   [{otopic: "", children: this.arrobtree}];
          

 

  arrdtsrc = [
    {sb: this.subjectFDB, exp: true},
    {sb: this.subjectDBD, exp: false},
    {sb: this.subjectAMDB, exp: false}
  ]

  

  childrenAccessor = (node: SubjectNode) => node.children ?? [];
  hasChild = (_: number, node: SubjectNode) => !!node.children && node.children.length > 0
    

  //CSS Related
  changeBckgd(event: PointerEvent) {    
    //currentTarget My own experience, similar to HTML
    var strtmp = (""+event.currentTarget).split("/")[3]
    
    this.arrobtree.forEach(element => {
      if(element.otopic.route==("/"+strtmp)){
        element.otopic.bckgd=!element.otopic.bckgd
      }
      else{
        element.otopic.bckgd=false
      }    
    });

  }  
}
