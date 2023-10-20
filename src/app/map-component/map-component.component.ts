import { NavbarComponent } from './../navbar/navbar.component';
import { ApiCoService } from './../services/api-co.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent {
  depname:string = ""
  depdesc:string = ""
  private depid:number = -1

  capid:number = -1
  capname:string = ""
  capdesc:string = ""

  touristList:any[] = []



  constructor(private apiCo : ApiCoService){  }

  searchMyDepartment(dp:string){
    this.apiCo.getDepartmentByName(dp).subscribe((data:any) => {
      this.depname = data[0].name
      this.depdesc = data[0].description
      this.depid = data[0].id
      this.capid = data[0].cityCapitalId

      this.apiCo.getCityById(this.capid).subscribe((data1:any) => {
        this.capname = "La capital es: "+data1.name
        this.capdesc = data1.description
      })

      this.apiCo.getDepartmentTouristicAttractions(this.depid).subscribe((data2:any) => {
        this.touristList = data2
      })
    })


  }


}
