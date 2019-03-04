import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { COINLIST } from '../../DataMocks/mock-coins';
import { USERLIST } from '../../DataMocks/mock-users';
import { Concept } from '../../ClassModels/concept';
import { Coin } from '../../ClassModels/coin';
import { User } from '../../ClassModels/user';
import { ConceptService } from  '../../Services/concept.service';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.css']
})

export class TableResultComponent implements OnInit 
{
  basicList: Concept[];
  calculateList: Concept[];
  coin: Coin;
  currentUser: User;

  constructor(private conceptService: ConceptService,
              @Inject(SESSION_STORAGE) private storage: WebStorageService)
  {
  }

  ngOnInit()
  {
    this.basicList = [];
    this.calculateList = [];
    let basicTotal: number = 0;
    let calculateTotal: number = 0;

    //Get information from session storage
    let userId: number = this.storage.get('userID');

    //Get current user information
    let userList = USERLIST.filter(user => user.id == userId);
    
    //Validate that return any user
    if(userList.length > 0)
    {
      this.currentUser = userList[0];
    }

    //Get the selected coin
    this.coin = this.storage.get('selectedCoin');

    let basicConceptList = this.conceptService.getConceptList();

    basicConceptList.forEach(element => {
      let newValue = element.value * this.coin.value;

      this.basicList.push({name: element.name, value: element.value});
      this.calculateList.push({name: element.name, value: newValue});

      basicTotal = basicTotal + element.value;
      calculateTotal = calculateTotal + newValue;
    });

    this.basicList.push({name: 'Total', value: basicTotal});
    this.calculateList.push({name: 'Total', value: calculateTotal});
  }
}
