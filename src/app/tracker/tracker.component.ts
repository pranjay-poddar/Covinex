import { DateWiseData } from './../models/date-wise-data';
import { map } from 'rxjs/operators';
import { GlobalDataSummary } from './../models/global-dat';
import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  data: GlobalDataSummary[] = [];
  countries: string[] = [];
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  selectedCountryData !: DateWiseData[];
  dateWiseData: any;
  loading = true;
  options!: {
    height: 500,
    animation: {
      duration: 1000,
      easing: 'out',
    },
  }
  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    merge(
      this.service.getDateWiseData().pipe(
        map(result => {
          this.dateWiseData = result;
        })
      ),
      this.service.getGlobalData().pipe(map(result => {
        this.data = result;
        this.data.forEach(cs => {
          this.countries.push(cs.country)
        })
      }))
    ).subscribe(
      {
        complete: () => {
          this.updateValues('India')
          this.loading = false;
        }
      }
    )



  }

  updateChart(): void {
    let dataTable = [];
    dataTable.push(["Date", 'Cases'])
    this.selectedCountryData.forEach(cs => {
      dataTable.push([cs.date, cs.cases])
    });
  }

  updateValues(country: string): void {
    console.log(country);
    this.data.forEach(cs => {
      if (cs.country === country) {
        this.totalActive = cs.active
        this.totalDeaths = cs.deaths
        this.totalRecovered = cs.recovered
        this.totalConfirmed = cs.confirmed
      }
    });
    this.selectedCountryData = this.dateWiseData[country]
    // console.log(this.selectedCountryData);
    this.updateChart();
  }
}
