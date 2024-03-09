import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
  // housingLocationList: HousingLocation[] = [];
  // housingService: HousingService = inject(HousingService);
  // filteredLocationList: HousingLocation[] = [];
  // constructor() {
  //   this.housingLocationList = this.housingService.getAllHousingLocations();
  //   this.filteredLocationList = this.housingLocationList;
  // }
  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredLocationList = this.housingLocationList;
  //     return;
  //   }

  //   this.filteredLocationList = this.housingLocationList.filter(
  //     housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  //   );
  // }
}
