import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientDTO} from '../ClientDTO';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.sass']
})
export class ClientDetailComponent implements OnInit {
  client: ClientDTO = new ClientDTO();
  editing: boolean = false;
  id: number;

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {

      this.client.ID_Client = params['ID_Client'];
      this.client.Nume = params['Nume'];
      this.client.Email = params['Email'];
      this.client.Adresa = params['Adresa'];
      // this.client = params['client'];
   });
  }
  ngOnInit() {
  }

  editClient() {
    this.editing = true;


  }
  saveClient(id: number, nume: string, email: string, adresa: string) {

    this.clientService.updateClient(id, nume, email, adresa).then(rsp => {
        if (rsp === 'updated') {
          // this.router.navigate(["/client"]);
          this.client.Email = email;
          this.client.Nume = nume;
          this.client.Adresa = adresa;
          this.router.onSameUrlNavigation;
          // window.location.reload();
          this.editing = false;
        }
      }, err => {
        console.log('error', err);
      }
    );
  }
  deleteClient(id: number) {

    this.clientService.deleteClient(id).then(rsp => {
        if (rsp === 'deleted') {
          this.router.navigate(['/client']);
          // window.location.reload();
        }
      }, err => {
        console.log('error', err);
      }
    );
  }

  // goBack(): void {
  //  this.location.back();
  // }

  // save(): void {
  //  this.clientService.update(this.client)
  //    .subscribe(_ => this.goBack());
  // }
}
