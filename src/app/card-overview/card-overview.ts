import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {LowerCasePipe, UpperCasePipe}  from '@angular/common'



@Component({
  imports: [MatCardModule, UpperCasePipe],
  selector: 'app-card-overview',
  styleUrl: './card-overview.css',
  templateUrl: './card-overview.html',
})
export class CardOverview implements OnInit {
  tabimparte: string[][] = [[],[]];

  constructor(){
    // this.tabimparte = Array<Array<string>>();
  }
  
  

  ngOnInit():void{
    this.printtabtest()
  }

  subtitleH4: String[] = [    
    "Group by",
    "Output ordering",
  ];
  
  q1 = "SELECT SUM ( subj_cred ) Amount_Credit FROM conduct , subjects WHERE cond_subj = subj_cod ;"
  q2 = "SELECT cond_id , SUM ( subj_cred ) Amount_Credit FROM conduct JOIN subjects ON ( cond_subj = subj_cod ) GROUP BY cond_id ;"
  q3 = "SELECT teac_name , teac_id , SUM ( subj_cred ) Amount_Credit FROM conduct JOIN subjects ON ( cond_subj = subj_cod ) JOIN teachers ON ( cond_id = teac_id ) GROUP BY teac_name , teac_id ;"

  q4 = "SELECT cond_id , SUM ( subj_cred ) Amount_Credit FROM conduct JOIN subjects ON ( cond_subj = subj_cod ) GROUP BY cond_id ORDER BY Amount_Credit ;"
  
  qhaving1 = "SELECT teac_id , teac_name , COUNT ( * ) subjects FROM teachers JOIN conduct on ( teac_id = cond_id ) GROUP BY teac_id , teac_name having count ( * ) >= 2"

  arrqueries1: string[] = this.q1.split(" ");
  arrqueries2: string[] = this.q2.split(" ");
  arrqueries3: string[] = this.q3.split(" ");

  arrqueries4: string[] = this.q4.split(" ");
  
  arrqhaving1: string[] = this.qhaving1.split(" ");

  // ======================================================  
  arrobjqueries1 = [{headerquery: 'Number of credits being taught.', arr: this.arrqueries1},
                   {headerquery: 'Number of credits taught by each teacher.', arr: this.arrqueries2},
                   {headerquery: 'Name of the teachers, ids and credits they teach.', arr: this.arrqueries3},                   
                  ];

  arrobjqueries2 = [{headerquery: 'Number of credits taught by each teacher oder by "Amount_Credit"', arr: this.arrqueries4}];                  
  
  arrobjquerhaving1 = [{headerquery: 'How many subjects are taught by teachers with 2 or more subjects?', arr: this.arrqhaving1}];                  
// ======================================================

  arrHn = [{desc: "Group by", arrobjqueries: this.arrobjqueries1},
           {desc: "Output ordering", arrobjqueries: this.arrobjqueries2},
           {desc: "Having", arrobjqueries: this.arrobjquerhaving1},
        ];

  msgaggre: string = "Using aggregate functions allows us to perform calculated operations over all rows that meet certain condition (or over all rows in the table),\
                      but when we need to perform these operations depending on a perticular cretaria, \"Group by\" can help us with that.";
  msgorderby: string = "It's also valid \"ORDER BY 2\" or \"ORDER BY SUM(subj_cred)\"";  
  msghaving: string = "Once the calculated information over the groups of rows is obtained using the group by, it is possible to filter these results and showing only those we need using the having clause. \"Having\" is to \"Group by\" the same as \"Where\" is to \"Select-From\".";

  
  isH2(str: string){
    return (this.isStringEqual("group by", str) || this.isStringEqual("having", str))
  }
  isStrHaving(str: string){
    return this.isStringEqual("having", str)
  }
  isStringEqual(str: string, str2: string){
    return (str.toLowerCase()==str2.toLowerCase()?true:false)
  }

  bucket_tableImp = "cond_ID,cond_subj 21111222,DGBD 21111222,FBD 21333444,PC".split(" ");
  bucket_tableAsig = "cond_ID,cond_subj 21111222,DGBD 21111222,FBD 21333444,xx".split(" ");

  bucket_tables = [this.bucket_tableImp, this.bucket_tableAsig];  
  

  printtabtest(){
    let str = "";
    let k = 0; 
    

    for (let i = 0; i < this.bucket_tables.length; i++) {      
      for (let j = 0; j < this.bucket_tables[i].length; j++) {               
        (this.bucket_tables[i][j].split(" ")).forEach(element => {                           
          element.split(",").forEach(element => {            
            this.tabimparte[i].push(element.toUpperCase())            
          });;          
        });
      }
    }

    for (let i = 0; i < this.tabimparte.length; i++) {      
      for (let j = 0; j < this.tabimparte[i].length; j++) {        
          console.log("" + i +":" + j +" - "+this.tabimparte[i][j])
      }
    }
    
  }

}

