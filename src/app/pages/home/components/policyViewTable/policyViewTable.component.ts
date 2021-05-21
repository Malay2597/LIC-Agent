import { Component, Input, OnInit } from '@angular/core';
import { LicApiService } from 'src/app/services/lic-api.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'policy-view-table',
  templateUrl: './policyViewTable.component.html'
})
export class PolicyViewTableComponent implements OnInit {

  policyHolder;
  @Input() type: string;
  constructor(private licApiService: LicApiService) { }

  ngOnInit() {
    this.licApiService.getPolicyListByType(this.type).subscribe(res => {
      console.log(res);
      this.policyHolder = res;
    });

  }
}
