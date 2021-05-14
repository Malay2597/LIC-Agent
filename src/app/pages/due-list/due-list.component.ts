import { Component, OnInit } from '@angular/core';
import { PolicyHolder } from 'src/app/models/policyHolder.model';
import { LicApiService } from 'src/app/services/lic-api.service';

@Component({
  selector: 'app-due-list',
  templateUrl: './due-list.component.html',
  styleUrls: ['./due-list.component.css']
})
export class DueListComponent implements OnInit {
  constructor(private licApiService: LicApiService) { }

  dueList: PolicyHolder[] = [];
  loading: boolean;
  selectedMonth;

  months = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' }
  ];

  ngOnInit() {
  }

  getDueList(month) {
    this.loading = true;
    this.licApiService.getDueList(month).subscribe(res => {
      console.log(res);
      this.dueList = res;
      this.loading = false;
    });
  }

}