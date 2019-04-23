import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {componentFactoryName} from '@angular/compiler';
import {AppComponent} from './app.component';
import {ClientComponent} from './client/client.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './guards/auth-guard';
import {SingUpComponent} from './signUp/signUp.component';
import {TelefonComponent} from './telefon/telefon.component';
import {ClientDetailComponent} from './client/client-detail/client-detail.component';
import {ClientAddComponent} from './client/client-add/client-add.component';
import {DefectiuneListComponent} from './defectiune/defectiune-list/defectiune-list.component';
import {DefectiuneAddComponent} from './defectiune/defectiune-add/defectiune-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {path: 'mobileRepairs', component: AppComponent},
  {path: 'clients', component: ClientComponent},
  {path: 'signUp', component: SingUpComponent},
  {path: 'telefon', component: TelefonComponent},
  { path: 'defectiune', component: DefectiuneListComponent },
  { path: 'defectiune/adauga', component: DefectiuneAddComponent },
  {
    path: 'client',
    component: ClientComponent,
    data: {title: 'List of Clients'}
  },
  {
    path: 'client-detail/:id',
    component: ClientDetailComponent,
    data: {title: 'client details'}
  },
  {
    path: 'client-add',
    component: ClientAddComponent,
    data: {title: 'Add Client'}
  }
  //  canActivate: [AuthGuardService] - din path clients
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
