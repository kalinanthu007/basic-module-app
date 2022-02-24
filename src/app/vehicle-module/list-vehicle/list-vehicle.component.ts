import { Component, OnInit } from '@angular/core';


import {VehicleService} from '../vehicle.service'

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  constructor(private service: VehicleService) {
    this.listVehicle()
  }
  result: any;
  vehicleData: any;


  ngOnInit(): void {
  }

  // List Service Name
  listVehicle() {
    this.service.listVehicleName().subscribe(data => {
      this.result = data;
      this.vehicleData = this.result.data;
    })
  }
}
