import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { Coin } from '../../ClassModels/coin';
import { User } from '../../ClassModels/user';
import { COINLIST } from '../../DataMocks/mock-coins';
import { USERLIST } from '../../DataMocks/mock-users';

@Component({
  selector: 'app-coin-selector',
  templateUrl: './coin-selector.component.html',
  styleUrls: ['./coin-selector.component.css']
})

export class CoinSelectorComponent implements OnInit 
{
  myCoinList = COINLIST;
  currentUser: User;

  constructor( private route: ActivatedRoute, 
               private router: Router,
               @Inject(SESSION_STORAGE) private storage: WebStorageService)
  { 
  }

  ngOnInit() 
  {
    //Get information from session storage
    let userId: number = this.storage.get('userID');

    //Get current user information
    let userList = USERLIST.filter(user => user.id == userId);
    
    //Validate that return any user
    if(userList.length > 0)
    {
      this.currentUser = userList[0];

      if(this.currentUser.type != 'admin')
      {
        //Update coins list
        this.myCoinList = COINLIST.filter(coin => this.currentUser.type.toUpperCase() == coin.type.toUpperCase());
      }
    }
  }

  onCoinSelect(coin: Coin): void
  {
    //Save useID in session
    this.storage.set('selectedCoin', coin);

    //Navigate to show table
    this.router.navigate(['tables']);
  }
}
