import { DateWiseData } from './../models/date-wise-data';
import { GlobalDataSummary } from './../models/global-dat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CssSelector } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private globalDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
  private dateWiseDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
  private extension = '.csv';
  month;
  date:any;
  year;
  
  getDate(date : number){
    if(date < 10){
      return '0'+date;
    }
    return date;
  }
  constructor(private http: HttpClient) {
    let now = new Date()
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
    this.date = now.getDate()-2;
    if (this.date === 1){
      this.month = now.getMonth();
      this.date = 30 - this.date;
    }
    else if (this.date === 2){
      this.month = now.getMonth();
      this.date = 30 - this.date;
    }
    
    else if (this.date === 3){
      this.month = now.getMonth();
      this.date = 30 - this.date;
    }
    //console.log(this.date,this.month,this.year);
    this.globalDataUrl = `${this.globalDataUrl}${this.getDate(this.month)}-${this.getDate(this.date)}-${this.year}${this.extension}`
   }

  getDateWiseData() {
    
    return this.http.get(this.dateWiseDataUrl, { responseType: 'text' })
      .pipe(map(result => {
        let rows = result.split('\n');
        // console.log(rows);
        let mainData = Array();
        let header = rows[0];
        let dates = header.split(/,(?=\S)/)
        dates.splice(0 , 4);
        rows.splice(0 , 1);
        rows.forEach(row=>{
          let cols = row.split(/,(?=\S)/)
          let con:any = cols[1];
          cols.splice(0 , 4);
          // console.log(con , cols);
          mainData[con] = [];
          cols.forEach((value , index)=>{
            let dw : DateWiseData = {
              cases : +value ,
              country : con , 
              date : new Date(Date.parse(dates[index])) 

            }
            mainData[con].push(dw)
          })
          
        })


        // console.log(mainData);
        return mainData;
      }))
  }

  getGlobalData() {
    return this.http.get(this.globalDataUrl, { responseType: 'text' }).pipe(
      map(result => {
        let data: GlobalDataSummary[] = [];
        type StringKey = { [key: string]: any };
        let raw: StringKey = {};
        let rows = result.split('\n');
        rows.splice(0, 1);
        // console.log(rows);
        rows.forEach(row => {
          let cols = row.split(/,(?=\S)/)

          let cs = {
            country: cols[3],
            confirmed: +cols[7],
            deaths: +cols[8],
            recovered: +cols[9],
            active: +cols[10],
          };
          let temp: GlobalDataSummary = raw[cs.country];
          if (temp) {
            temp.active = cs.active + temp.active
            temp.confirmed = cs.confirmed + temp.confirmed
            temp.deaths = cs.deaths + temp.deaths
            temp.recovered = cs.recovered + temp.recovered

            raw[cs.country] = temp;
          } else {
            raw[cs.country] = cs;
          }
        })
        return <GlobalDataSummary[]>Object.values(raw);
      })
    )
  }
}
