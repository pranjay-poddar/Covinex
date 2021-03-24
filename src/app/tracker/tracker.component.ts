import { map } from 'rxjs/operators';
import { DateWiseData } from './../models/date-wise-data';
import { GlobalDataSummary } from './../models/global-dat';
import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs/operators';
@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  data : GlobalDataSummary[] = [];
  countries : string [] = []
  constructor(private service : DataServiceService) { }

  ngOnInit(): void {
 this.service.getGlobalData().subscribe(result=>{
   this.data= result;
   this.data.forEach(cs=>{
     this.countries.push(cs.country)
   })
 })
    
    

  }

}
