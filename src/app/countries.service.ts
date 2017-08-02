import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";
import { Observable } from "rxjs/Observable";
import { Country } from "./model/country";

@Injectable()
export class CountriesService {

  getCountries(): Observable<Country[]> {
    return this.http.get("https://restcountries.eu/rest/v2/all").map(x => {

      let ret = x.json();

      let result: Array<Country> = ret.map(c => {
        let country: Country = new Country();
        country.code = c.alpha2Code;
        country.name = c.name;
        return country;
      });

      return result;
    });
}

  constructor(private http: Http) { }

}
