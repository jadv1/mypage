import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardSubtitle } from '@angular/material/card';
import { contDB } from '../../../contentsmenues';
import { AuxFunc } from '../../aux-func/aux-func';

@Component({
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, AuxFunc],
  selector: 'app-card-dtmptn',
  styleUrl: './card-dtmptn.css',
  templateUrl: './card-dtmptn.html',
})
export class CardDtmptn {
  topicfunc = contDB.topicdman

  Id2 = "88"
  name2 = "George Dan"
  reg1 = "ID: 60| Name: John Wood| Category: XYZ| Register Date: 01/01/1905".split("|")
  reg2 = ("ID: "+this.Id2+"| Name: "+this.name2).split("|")  

  
  // ====================================================== MESSAGES ====================================================== //
  msgaggre: string = "In order to modify the database, we can use 3 commands INSERT, DELETE, and UPDATE"; 
  p_insert1 = "To enter new data into a database, we'll use the SQL INSERT command.\
             The minimal expression comprises two clauses: INTO and VALUES."
  p_insert2 = 'Sometimes we are not interested in—or are unable to—assign values to \
            each and every column, or we will do so in an order different from the \
            one specified in the “CREATE TABLE” statement that defined the table.'

             q1 = "INSERT INTO tableName VALUES ( expressionList )"
             
             q2 = "INSERT INTO TEACHERS VALUES ( "+getExpressionList(this.reg1)+" )"             
             q3 = "INSERT INTO TEACHERS (ID, Name) VALUES ( "+getExpressionList(this.reg2)+" )"
  // ====================================================== END MESSAGES ====================================================== //

  q1_insert: string[] = this.q1.split(" ");

  q2_insert: string[] = this.q2.split(" ");
  q3_insert: string[] = this.q3.split(" ");
  
  headerqries = [
    {p:undefined, headerquery: 'Register a new teacher with the following information:', arr: this.q2_insert, reg: this.reg1},
    {p:this.p_insert2, headerquery: 'Register a teacher with ID number '+this.Id2+' and the name '+this.name2, arr: this.q3_insert, reg: this.reg2}]

  arrSessions = [{desc: "Insert", arrObjQueries: this.headerqries},
                 {desc: "Update"},
                 {desc: "Delete"}];
}
function getExpressionList(reg1: any) {
  let explist="'"
  for (let i = 0; i < reg1.length; i++) {
    if(i<reg1.length-1)
      explist = explist + reg1[i].split(": ")[1]+"', '"
    else{
      let strtmp = "";
       (reg1[i].split(": ")[1]).split("/").forEach((element: string) => {        
        // console.log(reg1[i].split(": ")[1].includes("/") )
        // let strtmp2: string = (reg1[i].split(": ")[1])        
        // console.log(strtmp2.includes("/"))

        strtmp = (reg1[i].split(": ")[1].includes("/")?(Number(element)):element)+"-"+strtmp
        
      });
      strtmp = strtmp.substring(0, strtmp.length-1)
      explist = explist + strtmp+"', '"
    }
  }
  return explist = explist.substring(0, explist.length-3);
}

