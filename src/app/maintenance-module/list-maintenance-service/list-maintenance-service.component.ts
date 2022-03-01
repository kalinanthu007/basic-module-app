import { Component, OnInit,Output,EventEmitter } from '@angular/core';


// Import Service
import {MaintenanceService} from '../maintenance.service'

@Component({
  selector: 'app-list-maintenance-service',
  templateUrl: './list-maintenance-service.component.html',
  styleUrls: ['./list-maintenance-service.component.css']
})
export class ListMaintenanceServiceComponent implements OnInit {
  @Output() customEvent = new EventEmitter<any>()
  listMaintenanceServiceComponentTitle:any='Maara'

  constructor(private service: MaintenanceService) {
    this.listService()
    this.customEvent.emit(this.listMaintenanceServiceComponentTitle)
  }
  // listMaintenanceServiceComponentTitle:any='Maintenance Service List - Data'

  result: any;
  serviceData: any;

  click() {
    this.customEvent.emit(this.listMaintenanceServiceComponentTitle)
  }

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
