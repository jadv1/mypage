import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {LowerCasePipe, UpperCasePipe}  from '@angular/common'
import { elementAt } from 'rxjs';



@Component({
  imports: [MatCardModule, UpperCasePipe],
  selector: 'app-card-overview',
  styleUrl: './card-overview.css',
  templateUrl: './card-overview.html',
})
export class CardOverview implements OnInit {
  
  
  
  constructor(){
    
    // this.tabimparte = Array<Array<string>>();
  }
  
  

  ngOnInit():void{
    
    // arr3D = new Array(new Array(new Array<String[]>()));
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

 
  tabcond = "Conduct";
  bucket_tableImp = "\
COND_ID|COND_SUBJ;\
21111222|DGBD;\
21111222|FBD;\
21333444|PC".
  split(";");

  tabasig = "Subjects";
  bucket_tableAsig = "\
SUBJ_COD|SUBJ_DESC|SUBJ_CRED|SUBJ_CREDP;\
HI   |HISTORIA DE LA INFORMATICA|4,5|(null);\
FBD  |FUNDAMENTOS DE LAS BASES DE DATOS|6|1,5;\
DGBD |DISEÑO Y GESTION DE BASES DE DATOS|6|3;\
PC   |PROGRAMACION CONCURRENTE|6|1,5;\
FP   |FUNDAMENTOS DE LA PROGRAMACION|9|4,5;\
AGBD |ADMINISTRACIÓN DE BASES DE DATOS|6|0".
  split(";");

  tabteac = "Teachers";
  bucket_tableTeac = "\
teac_id|teac_name|teac_CATEGory|teac_hired;\
21333445|RAFAEL2 ROMEO|ASO5|03/05/24;\
21111222|EVA GOMEZ|TEU |01/10/93;\
21222333|MANUEL PALOMAR|TEU |16/06/89;\
21333444|RAFAEL ROMERO|ASO6|16/06/92".
split(";");

  arr3D: string[][][] = [[[]],[[]],[[]]];

  bucket_tables = [{nameTbl: this.tabteac, tbl: this.bucket_tableTeac},
                   {nameTbl: this.tabcond, tbl: this.bucket_tableImp},
                   {nameTbl: this.tabasig, tbl: this.bucket_tableAsig}                   
                  ];  
  
  printtabtest(){    
    for (let k = 0; k < this.bucket_tables.length; k++) {

      for (let i = 0; i < this.bucket_tables[k].tbl.length; i++) {
        if(i==0){
          this.arr3D[k][0] = this.bucket_tables[k].tbl[i].split("|")
        }
        else{
          this.arr3D[k][i] = this.bucket_tables[k].tbl[i].split("|")
        }
      }            
    } 
    
    // this.arr3D.forEach(cellsdt => {
    //         console.log(cellsdt)

    //   cellsdt.forEach(item => {
    //     console.log(item)
    //     item.forEach(element => {
    //       console.log(element)          
    //     });
    //   });

    // });    
  }
  
}

