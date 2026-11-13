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

  // ====================================================== MESSAGES ====================================================== //
  msgaggre: string = "In order to modify the database, we can use 3 commands INSERT, DELETE, and UPDATE"; 
  p_insert1 = "To enter new data into a database, we'll use the SQL INSERT command.\
             The minimal expression comprises two clauses: INTO and VALUES."
             q1 = "INSERT INTO tableName VALUES ( expressionList )"
  // ====================================================== END MESSAGES ====================================================== //

  arrqueries1: string[] = this.q1.split(" ");

  arrSessions = [{desc: "Insert"},
                 {desc: "Update"},
                 {desc: "Delete"}];
}
