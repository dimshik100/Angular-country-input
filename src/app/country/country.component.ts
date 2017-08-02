import { Component, OnInit, Output, Input } from '@angular/core';
import { CountriesService } from "../countries.service";
import { Country } from "../model/country";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountriesService]
})
export class CountryComponent implements OnInit {

  countries: Array<Country>;
  isLoading: boolean = false;
  @Input()
  selectedCountry: Country;

  constructor(private countriesService: CountriesService) { }

  onChange(event) {
    let selectedCountryCode = event.target.value;
    this.selectedCountry = this.countries.find(country => country.code == selectedCountryCode);
  }

  ngOnInit() {
    this.isLoading = true;
    this.countriesService.getCountries().subscribe(res => {
      this.countries = res;
      this.isLoading = false;
      console.log(this.countries);
    });
  }



}
