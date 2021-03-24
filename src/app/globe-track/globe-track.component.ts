import { GlobalDataSummary } from './../models/global-dat';
import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';

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
  // loading = true;
   globalData: GlobalDataSummary[]=[];
  // datatable = [];
  // chart = {
  //   PieChart : "PieChart" ,
  //   ColumnChart : 'ColumnChart' ,
  //   LineChart : "LineChart", 
  //   height: 500, 
  //   options: {
  //     animation:{
  //       duration: 1000,
  //       easing: 'out',
  //     },
  //     is3D: true
  //   }  
  // }

  constructor(private DataService : DataServiceService) { }

  ngOnInit(): void {
    this.DataService.getGlobalData()
    .subscribe(
      {
        next : (result)=>{
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

          // this.initChart('c');
        }, 
        // complete : ()=>{
        //   this.loading = false;
        
        // }
      }
    )
  }

}
