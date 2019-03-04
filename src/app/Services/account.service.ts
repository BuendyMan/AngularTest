import { Injectable } from '@angular/core';
import { User } from '../ClassModels/user';
import { USERLIST } from '../DataMocks/mock-users';

@Injectable({
  providedIn: 'root'
})

export class AccountService 
{
  private response: number;

  constructor() { }

  validateUser(currentUser: User): number 
  {
    //Initialice response
    this.response = null;

    //Get user by name and password
    const selectedUser =  USERLIST.filter( user => currentUser.name.toLowerCase() == user.name.toLowerCase() && 
                                                   currentUser.password.toLowerCase() == user.password.toLowerCase());

    //Validate user list
    if(selectedUser.length > 0)
    {
      //Asignate new response value
      this.response = selectedUser[0].id;
    }

    return this.response;
  }
}