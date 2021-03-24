import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocards',
  templateUrl: './infocards.component.html',
  styleUrls: ['./infocards.component.css']
})
export class InfocardsComponent implements OnInit {
  @Input('totalConfirmed')
  totalConfirmed:any;
  @Input('totalDeaths')
  totalDeaths:any;
  @Input('totalActive')
  totalActive:any;
  @Input('totalRecovered')
  totalRecovered:any;

  constructor() { }

  ngOnInit(): void {
  }

}
