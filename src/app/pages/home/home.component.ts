import { Component, OnInit } from '@angular/core';
import { PolicyHolder } from 'src/app/models/policyHolder.model';
import { LicApiService } from 'src/app/services/lic-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 policyTypesArray = [
  {label: 'Open', value: 'InForce'},
  {label: 'Single', value: 'Single'},
  {label: 'Matured', value: 'Matured'},
  {label: 'Surrendered', value: 'Surrendered'},
  {label: 'Death Claim', value: 'Death'},
  {label: 'Lapsed', value: 'Lapsed'},
  {label: 'Reduced pay', value: 'Reduced'},
];
  constructor() { }

  ngOnInit() {
  }

}
