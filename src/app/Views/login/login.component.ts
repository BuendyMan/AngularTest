import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { User } from '../../ClassModels/user';
import { AccountService } from  '../../Services/account.service';
import { AlertInformation } from '../../ClassModels/alert-information';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  user: User;
  showToast : boolean = false;
  errorAlert: AlertInformation;

  constructor(private accountService: AccountService, 
              private router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) 
  {
    //Initialice inputs propertie values
    this.user = {id: 0, name:'', password:'', type:''};
  }

  ngOnInit() 
  {
    //Initialice alert message
    this.errorAlert = { 
      bodyMessage: 'La información del usuario es incorrecta. Intentelo nuevamente', 
      type: 'Error'};
  }

  onButtonClick(): void
  {
    console.log('user:' + this.user.name);

    //Get user ID
    let selectedUser = this.accountService.validateUser(this.user);

    //Clear input propertie values
    this.user = {id: 0, name:'', password:'', type:''};

    if(selectedUser != null)
    {
        //Hidde alert
        this.showToast = false;

        //Save useID in session
        this.storage.set('userID', selectedUser);

        //Navegate to Next Page
        this.router.navigate(['coins']);
    }
    else
    {
        this.showToast = true;
    }
  }
}