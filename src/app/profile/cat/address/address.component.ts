import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  screen1:boolean=false;
  clickAddress(){
    this.screen1=true;
  }

}
