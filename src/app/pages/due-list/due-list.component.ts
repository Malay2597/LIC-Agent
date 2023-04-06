import { Component, OnInit } from '@angular/core';
import { PolicyHolder } from 'src/app/models/policyHolder.model';
import { LicApiService } from 'src/app/services/lic-api.service';

@Component({
  selector: 'app-due-list',
  templateUrl: './due-list.component.html',
  styleUrls: ['./due-list.component.css']
})
export class DueListComponent implements OnInit {
  url: string;
  constructor(private licApiService: LicApiService) { }

  dueList: PolicyHolder[] = [];
  loading: boolean;
  selectedMonth;

  months = [
    { value: 1, viewValue: 'January' },
    { value: 2, viewValue: 'February' },
    { value: 3, viewValue: 'March' },
    { value: 4, viewValue: 'April' },
    { value: 5, viewValue: 'May' },
    { value: 6, viewValue: 'June' },
    { value: 7, viewValue: 'July' },
    { value: 8, viewValue: 'August' },
    { value: 9, viewValue: 'September' },
    { value: 10, viewValue: 'October' },
    { value: 11, viewValue: 'November' },
    { value: 12, viewValue: 'December' }
  ];

  ngOnInit() {
  }

  getDueList(month: number) {
    this.loading = true;
    this.dueList = this.licApiService.getDueList(month);
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  onClick(value: PolicyHolder) {
    const obj = `PolicyNo:${value.policyNumber}%0ADoc : ${value.doc}%0APrem : ${value.premium}`;
    this.url = `https://api.whatsapp.com/send?phone=919662208847&text=${obj}`;
    window.location.href = this.url;
  }

  onPay(value: PolicyHolder) {
    value.premiumPaid = true;
    console.log(value);
}
}
