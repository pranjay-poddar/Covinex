import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globe-track',
  templateUrl: './globe-track.component.html',
  styleUrls: ['./globe-track.component.css']
})
export class GlobeTrackComponent implements OnInit {

  constructor(private DataService : DataServiceService) { }

  ngOnInit(): void {
    this.DataService.getGlobalData()
    .subscribe(
      {
        next : (result)=>{
          console.log(result);
        }
      }
    )
  }

}
