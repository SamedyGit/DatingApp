import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountService: AccountService,
              public toastr: ToastrService
              ) {}

  ngOnInit(): void {
  }


  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => this.toastr.error(error.error)   
    })
  }
  
  logout() {
    this.accountService.logout();
  }
}
