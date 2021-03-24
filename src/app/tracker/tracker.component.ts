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
  countries : string [] = [];
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  constructor(private service : DataServiceService) { }

  ngOnInit(): void {
 this.service.getGlobalData().subscribe(result=>{
   this.data= result;
   this.data.forEach(cs=>{
     this.countries.push(cs.country)
   })
 })
}  
 updateValues(country : string){
  console.log(country);
  this.data.forEach(cs=>{
    if(cs.country == country){
      this.totalActive = cs.active
      this.totalDeaths = cs.deaths
      this.totalRecovered = cs.recovered
      this.totalConfirmed = cs.confirmed
    }
  })
}
}
