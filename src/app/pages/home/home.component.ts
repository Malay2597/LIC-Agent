import { Component, OnInit } from '@angular/core';
import { PolicyHolder } from 'src/app/models/policyHolder.model';
import { LicApiService } from 'src/app/services/lic-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  maturedPolicies: PolicyHolder[];
  singlePolicies: PolicyHolder[];
  openPolicies: PolicyHolder[];
  surrenderdPolicies: PolicyHolder[];
  lapsedPolicies: PolicyHolder[];
  reducedPaidUpPolicies: PolicyHolder[];
  deathClaimPolicies: PolicyHolder[];
  constructor(private licApiService: LicApiService) { }

  ngOnInit() {
    this.licApiService.getPolicyDetails(1, 300).subscribe(res => {

    this.maturedPolicies = res.filter(obj => obj.status === 'Matured');
    this.openPolicies = res.filter(obj => obj.status === 'In Force');
    this.singlePolicies = res.filter(obj => obj.status === 'Single Premium');
    this.surrenderdPolicies = res.filter(obj => obj.status === 'Surrendered');
    this.lapsedPolicies = res.filter(obj => obj.status === 'Lapsed without Surrender Value');
    this.reducedPaidUpPolicies = res.filter(obj => obj.status === 'Reduced Paid-up');
    this.deathClaimPolicies = res.filter(obj => obj.status === 'Death Claim');
    console.log(this.singlePolicies);
    console.log(this.openPolicies);
    console.log(this.maturedPolicies);
    console.log(this.surrenderdPolicies);
    console.log(this.lapsedPolicies);
    console.log(this.reducedPaidUpPolicies);
    console.log(this.deathClaimPolicies);
  });
  }

}
