import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { LoginComponent } from './Views/login/login.component';
import { CoinSelectorComponent } from './Views/coin-selector/coin-selector.component';
import { ToastMessageComponent } from './Views/GenericViews/toast-message/toast-message.component';
import { TableResultComponent } from './Views/table-result/table-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoinSelectorComponent,
    ToastMessageComponent,
    TableResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
