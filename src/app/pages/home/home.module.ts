import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableModule } from 'primeng/table';

import { LicApiService } from 'src/app/services/lic-api.service';
import { HomeComponent } from './home.component';
import { PolicyViewTableComponent } from './components/policyViewTable/policyViewTable.component';
import { AppMaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    PolicyViewTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AppMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, HomeComponent],
  providers: [LicApiService],
})
export class HomeModule { }
