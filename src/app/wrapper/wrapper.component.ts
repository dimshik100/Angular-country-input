import { Component, OnInit } from '@angular/core';
import { Country } from "../model/country";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  selectedCountry: Country;

  constructor() {
    // this.selectedCountry = new Country('Israel','IL');
  }

  ngOnInit() {
  }

}
