import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common'; 
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
@Component({
  standalone:true,
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList:HousingLocation [] = [];

  housingService:HousingService = inject(HousingService);

  filteredLocationList:HousingLocation [] = [];

  constructor(
  ){
    //this.housingLocationList = this.housingService.getAllHousingLocations();
    //this.filteredLocationList = this.housingLocationList

    //con HTTP
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) =>{
      console.log('Datos recibidos:', housingLocationList); 
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    })
  }

  filterResults(text:string) {
     console.log('Texto a filtrar:', text);
    if(!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
     console.log('Resultados filtrados:', this.filteredLocationList);
  }

  testClick() {
  console.log('Click funcionando');
}

}
