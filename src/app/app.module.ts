import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UsernameComponent } from './username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    ServersComponent,
    UsernameComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
