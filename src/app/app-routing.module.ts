import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './Views/login/login.component';
import {CoinSelectorComponent} from './Views/coin-selector/coin-selector.component';
import { TableResultComponent } from './Views/table-result/table-result.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'coins', component: CoinSelectorComponent},
  {path: 'tables', component: TableResultComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
