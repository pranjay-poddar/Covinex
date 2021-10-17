import { GlobalDataSummary } from './../models/global-dat';
import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { ChartType, Row } from "angular-google-charts";

@Component({
  selector: 'app-globe-track',
  templateUrl: './globe-track.component.html',
  styleUrls: ['./globe-track.component.css']
})

export class GlobeTrackComponent implements OnInit {
 
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  loading = true;
  con = 'India';
  globalData: GlobalDataSummary[]=[];
  datatable:any=[];
  chart = {
    PieChart: ChartType.PieChart,
    LineChart : ChartType.LineChart,
    height: 500,
    options: {
      animation:{
        duration: 1000,
        easing:'out',
      },
      is3D: true,
      backgroundColor:'#e9ecef'
      // chartArea:{right:0,top:0,width:'100%',height:'50%'}
    }
  }
 
  constructor(private DataService : DataServiceService) { }

  ngOnInit(): void {
    this.DataService.getGlobalData()
    .subscribe(
      {
        next: (result) => {
          console.log(result);
          this.globalData = result;
          result.forEach(cs => {
            if (!Number.isNaN(cs.confirmed)) {
              this.totalActive += cs.active
              this.totalConfirmed += cs.confirmed
              this.totalDeaths += cs.deaths
              this.totalRecovered += cs.active
            }

          })

          this.initChart('c');
        }, 
        complete : ()=>{
          this.loading = false;
        }
      }
    )
}



  updateChart(input: HTMLInputElement): void {
    console.log(input.value);
    this.initChart(input.value)
  }

initChart(caseType: string): void {
 this.datatable = [];
  // this.datatable.push(["Country", "Cases"])
  
  this.globalData.forEach(cs => {
    let value:any ;
    if (caseType == 'c'){
      if (cs.confirmed > 1190000){
        value = cs.confirmed;
      }
    }
    if (caseType == 'a'){
      if (cs.active > 190000){
       value = cs.active;}
      }
    if (caseType == 'd'){
      if (cs.deaths > 90000){
        value = cs.deaths;
    }}
    if (caseType == 'r'){
      if (cs.recovered > 90000){
          value = cs.recovered;
        }
      }
      
      this.datatable.push([cs.country,value])
  })
  console.log(this.datatable);

}

}
