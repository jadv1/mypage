import { Component, Input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { contDB, contSws, arrobtree, arrobtree_tools, arrobtree_tsting, tree_etl } from '../contentsmenues';
import { copyArrayItem } from '@angular/cdk/drag-drop';


interface SubjectNode {
  otopic: {};
  children?: SubjectNode[];  
}


@Component({
  imports: [MatExpansionModule, RouterLink, MatTreeModule, MatButtonModule, MatIconModule, MatDividerModule],  
  selector: 'app-expansion-overview',
  styleUrl: './expansion-overview.css',
  templateUrl: './expansion-overview.html',
})


export class ExpansionOverview  implements OnInit {
  bckgd = false;
  arrobtreeex = [{otopic: {topic: '', route: '', bckgd: true}}]
  
  ngOnInit(): void{      
  }

  @Input() title: string | undefined
                      
  // List of subcontents
  dataSource: SubjectNode[] = [{otopic: contDB.hd1_sect1, children: arrobtree}]; 
  dataSrcDDB: SubjectNode[] = [{otopic: contDB.hd2_sect1, children: tree_etl}]; 
  dataSoureLevel: SubjectNode[] = [{otopic: contSws.hd1_sect1, children: arrobtree_tsting}]; 
  dataSourceTools: SubjectNode[] = [{otopic: contSws.hd2_sect1, children: arrobtree_tools}]; 
  dtsrcArrArr = [this.dataSource];

  arrdtsrc = [
    {sb: contDB.hd1, exp: true},
    {sb: contDB.hd2, exp: false},
    {sb: contDB.hd3, exp: false}
  ]
  
//Constants Testing
  arrdtsrc_tsting = [
    {sb: contSws.hd1, exp: true},
    {sb: contSws.hd2, exp: false},
    {sb: contSws.hd3, exp: false},    
  ]  

  childrenAccessor = (node: SubjectNode) => node.children ?? [];
  hasChild = (_: number, node: SubjectNode) => !!node.children && node.children.length > 0
    

  //CSS Related
  changeBckgd(event: PointerEvent) {    
    //currentTarget My own experience, similar to HTML
    var strtmp = (""+event.currentTarget).split("/")[3]
    var checkcoloms = strtmp.split(":")
    if(checkcoloms[1]!=null){
      strtmp = checkcoloms[1].substring(0, checkcoloms[1].length-1)
      // strtmp="/"+strtmp
    }
    // console.log(strtmp)
    this.arrobtreeex.forEach(element => {
      if(element.otopic.route==(strtmp)){
        if(element.otopic.bckgd != true){
          element.otopic.bckgd=!element.otopic.bckgd
        }
      }
      else{
        element.otopic.bckgd=false
      }    
    });

  }  

  getArr(){    
    this.arrobtreeex.splice(0);
    copyArrayAll(arrobtree_tools, this.arrobtreeex)
    copyArrayAll(arrobtree_tsting, this.arrobtreeex)
    copyArrayAll(arrobtree, this.arrobtreeex)    

    if(this.title==contSws.title.toUpperCase()){  
      // this.dataSource[0].otopic = contSws.headSubAcpCri;
      // this.dataSource[0].children = arrobtree_tsting
      // settingArrTree(arrobtree, arrobtree_tsting)
      
      
      this.dtsrcArrArr.splice(0)
      this.dtsrcArrArr.push(this.dataSoureLevel)
      this.dtsrcArrArr.push(this.dataSourceTools)      

      return this.arrdtsrc_tsting
    }
    else{
      // this.arrobtreeex.splice(0);
      // copyArrayAll(arrobtree, this.arrobtreeex)
      
      this.dtsrcArrArr.splice(0)
      this.dtsrcArrArr.push(this.dataSource)
      this.dtsrcArrArr.push(this.dataSrcDDB)
      return this.arrdtsrc
    }
  }


}

function settingArrTree(
  arrobtree: { otopic: { topic: string; route: string; bckgd: boolean; }; }[], 
  arrobtree_tsting: { otopic: { topic: string; route: string; bckgd: boolean; }; }[]) {

    // Delete the array
    arrobtree.splice(0);

    // let ar1 = ["1","2","3"]
    // let ar2 = [""]
    // ar1.forEach((element, i) => {
    //   copyArrayItem(ar1, ar2,i,i)
    // })
    copyArrayAll(arrobtree_tsting, arrobtree)
}

function copyArrayAll(
  arrobtree_tsting: { otopic: { topic: string; route: string; bckgd: boolean; }; }[], 
  arrobtree: { otopic: { topic: string; route: string; bckgd: boolean; }; }[]) {
    arrobtree_tsting.forEach(element => {
      arrobtree.push(element);
    });
}

function selectFirstTopic(arrobtreeex: { otopic: { topic: string; route: string; bckgd: boolean; }; }[], title: string | undefined) {
        for (let i = 0; i < arrobtreeex.length; i++) {
          if(isDBtitle(title) && arrobtreeex[i].otopic.topic==contDB.topicagre){
            arrobtreeex[i].otopic.bckgd=true;
            break;
          }
          else if(isSWpttitle(title) && arrobtreeex[i].otopic.topic==contSws.topicfunc){            
            arrobtreeex[i].otopic.bckgd=true;
            break;
          }
      } 
}

function isDBtitle(title: string | undefined) {
  return ((title?.toUpperCase()===contDB.title.toUpperCase())?true:false)
}
function isSWpttitle(title: string | undefined) {
  return ((title?.toUpperCase()===contSws.title.toUpperCase())?true:false)
}

