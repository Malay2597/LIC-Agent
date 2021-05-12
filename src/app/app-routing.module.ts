import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DueListComponent } from './pages/due-list/due-list.component';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent }, { path: 'due-list', component: DueListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
