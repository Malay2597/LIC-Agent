import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DueListComponent } from './pages/due-list/due-list.component';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', loadChildren: './pages/home/home.module#HomeModule' }, { path: 'due-list', component: DueListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
