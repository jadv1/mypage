import { Component, Input } from '@angular/core';
import {UpperCasePipe}  from '@angular/common'

@Component({
  imports: [UpperCasePipe],
  selector: 'app-aux-func',
  styleUrl: './aux-func.css',
  templateUrl: './aux-func.html',
})
export class AuxFunc {
  @Input() arrstr: string[] | undefined
  
}
