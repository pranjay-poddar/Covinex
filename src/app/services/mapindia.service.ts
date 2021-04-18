import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MapindiaService {

  constructor(private httpClient: HttpClient) {

   }
   private grantType: string = "client_credentials";
   private clientId: string = "33OkryzDZsIwhgmJuvjlqO6jgQ2uj-UqoLNRVyK6wgxWo2blhMU_sKqT0XrKDGyID9Ug-SXf2LzqagwD7IMpEiK6Jv_U_M9gDF91Qkit9YbqKdxRa5Qrsw==";
   private clientSecret: string = "lrFxI-iSEg9d2kgt-_58_NKHOLRKipBJDw53bhlS4534Kcvua01V7K4Weju6fuNLFu3edh3CRY8id86Y-lLNYkpzHQJXFi97xx8AjD0l4_ZaBzjnCaH-6VjZtJgAse1i";
   private securityURL: string = "https://outpost.mapmyindia.com/api/security/v3.0.5/oauth/token?grant_type=" + this.grantType + "&client_id=" + this.clientId + "&client_secret=" + this.clientSecret;
   private autoSuggestURL: string = "https://atlas.mapmyindia.com/api/places/search/json?query=agra&location=28.5454,77.455454&bridge&explain&username=balmukand";
   private nearbyURL: string = "https://atlas.mapmyindia.com/api/places/nearby/json?explain&richData&username=balmukand&refLocation=28.467470,77.077518&keywords=FINATM";
   getToken() {
    let promise = new Promise((resolve, reject) => {
        let apiURL = this.securityURL;
        this.httpClient.post(apiURL, null)
            .toPromise()
            .then(
            res => { // Success
                resolve(res);
                }
            );
        });
    return promise;
}

autoSuggest(token: string) {
  const _url = this.autoSuggestURL+"&access_token="+token;
  const promise = new Promise((resolve, reject) => {
  this.httpClient.get(_url)
      .toPromise()
      .then(
          res => { // Success
              // console.log(res);
              resolve(res);
              }
          );
      });
  return promise;
}

nearby(token: string) {
  const _url = this.nearbyURL+"&access_token="+token;
  const promise = new Promise((resolve, reject) => {
  this.httpClient.get(_url)
      .toPromise()
      .then(
          res => { // Success
              resolve(res);
              }
          );
      });
  return promise;
}

geocode(token: string) {
  const _url = (<any>this).geocodeURL+"&access_token="+token;
  const promise = new Promise((resolve, reject) => {
  this.httpClient.get(_url)
      .toPromise()
      .then(
          res => { // Success
              resolve(res);
              }
          );
      });
  return promise;
}

textsearch(token: string) {
  const _url = (<any>this).textsearchURL+"&access_token="+token;
  const promise = new Promise((resolve, reject) => {
    this.httpClient.get(_url)
      .toPromise()
      .then(
          res => { // Success
              resolve(res);
          }
      );
  });
  return promise;
}
  }

