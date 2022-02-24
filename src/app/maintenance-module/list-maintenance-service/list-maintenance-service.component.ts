import { Component, OnInit } from '@angular/core';


// Import Service
import {MaintenanceService} from '../maintenance.service'

@Component({
  selector: 'app-list-maintenance-service',
  templateUrl: './list-maintenance-service.component.html',
  styleUrls: ['./list-maintenance-service.component.css']
})
export class ListMaintenanceServiceComponent implements OnInit {

  constructor(private service: MaintenanceService) {
    this.listService()
  }
  result: any;
  serviceData: any;


  ngOnInit(): void {
  }

  // List Service Name
  listService() {
    this.service.listServiceName().subscribe(data => {
      this.result = data;
      this.serviceData = this.result.data;
    })
  }
}
