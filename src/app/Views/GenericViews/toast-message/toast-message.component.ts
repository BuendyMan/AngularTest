import { Component, OnInit, Input } from '@angular/core';
import { AlertInformation } from '../../../ClassModels/alert-information';
import { AlertType } from '../../../ClassModels/alert-type';
import { ALERTTYPES } from '../../../Helpers/constants';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css']
})

export class ToastMessageComponent implements OnInit {

  @Input() alertMessage: AlertInformation
  alertInfo: AlertType;

  constructor() 
  { 
  }

  ngOnInit() {
    const selectdAlert =  ALERTTYPES.filter( type => this.alertMessage.type.toLowerCase() == type.name.toLowerCase());

    console.log(selectdAlert);

    this.alertInfo = selectdAlert[0];
  }
}