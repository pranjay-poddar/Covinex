import { MapindiaService } from './../services/mapindia.service';
import { Component, OnInit } from '@angular/core';
declare var MapmyIndia: any; // Declaring Mapmyindia
declare var L: any; // Declaring L
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  title = 'Locate Testing Center';
  public map : any; // Initializing Map Variable
  constructor(private mapindiaService: MapindiaService) { }
  private token!:string;
  ngOnInit(): void {
      // Creating Map
      this.map = new MapmyIndia.Map('map',
      {
          center: [28.04, 78.2],
          zoom: 12
      });

      this.mapindiaService.getToken().then((data:any) => {
          this.token = data['access_token'];
      });
  }
  auto() {
      this.mapindiaService.autoSuggest(this.token).then((data) => {
          console.log(data);
      });
  }
  nearby() {
      this.mapindiaService.nearby(this.token).then((data) => {
          console.log(data);
      });
  }
  geocode(){
      this.mapindiaService.geocode(this.token).then((data) => {
        console.log(data);
      });
  }
  textsearch(){
      this.mapindiaService.textsearch(this.token).then((data) => {
        console.log(data);
      });
  }
}