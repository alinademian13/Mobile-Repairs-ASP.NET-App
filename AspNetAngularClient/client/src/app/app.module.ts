import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientComponent} from './client/client.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './guards/auth-guard';
import {AuthService} from './service/auth.service';
import {SingUpComponent} from './signUp/signUp.component';
import {TelefonComponent} from './telefon/telefon.component';
import {TelefonService} from './service/telefon.service';
import {ClientDetailComponent} from './client/client-detail/client-detail.component';
import {ClientAddComponent} from './client/client-add/client-add.component';
import {CommonModule} from '@angular/common';
import {ClientService} from './service/client.service';
import { DefectiuneAddComponent } from './defectiune/defectiune-add/defectiune-add.component';
import { DefectiuneListComponent } from './defectiune/defectiune-list/defectiune-list.component';
import {DefectiuneService} from './service/defectiune.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    SingUpComponent,
    TelefonComponent,
    ClientDetailComponent,
    ClientAddComponent,
    DefectiuneAddComponent,
    DefectiuneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, AuthService, TelefonService, ClientService, DefectiuneService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
