import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseURL = 'https://angular.dev/assets/images/tutorials/common'
  housinglocation:Housinglocation = {
    id: 999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseURL}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false
  }
}
