import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardSubtitle } from '@angular/material/card';
import { contDB } from '../../../contentsmenues';

@Component({
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
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
             c_insert1 = "INSERT INTO tableName VALUES ( expressionList )"
  // ====================================================== END MESSAGES ====================================================== //

  arrSessions = [{desc: "Insert"},
                 {desc: "Update"},
                 {desc: "Delete"}];
}
