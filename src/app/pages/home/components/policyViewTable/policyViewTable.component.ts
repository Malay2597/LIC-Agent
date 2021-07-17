import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';
import { PolicyHolder } from 'src/app/models/policyHolder.model';
import { LicApiService } from 'src/app/services/lic-api.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'policy-view-table',
  templateUrl: './policyViewTable.component.html',
  styleUrls: ['./policyViewTable.component.css']
})
export class PolicyViewTableComponent implements OnInit {

  policyHolder: PolicyHolder[];
  @Input() type: string;
  loading: boolean;
  url;
  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private licApiService: LicApiService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.licApiService.getPolicyListByType(this.type).subscribe(res => {
      this.policyHolder = res;
      this.loading = false;
    });
  }

  onClick(value: PolicyHolder) {
    const obj = `PolicyNo:${value.policyNumber}%0ADoc : ${value.doc}%0APrem : ${value.premium}`;
    this.url = `https://api.whatsapp.com/send?phone=919662208847&text=${obj}`;
    window.location.href = this.url;
  }
}
