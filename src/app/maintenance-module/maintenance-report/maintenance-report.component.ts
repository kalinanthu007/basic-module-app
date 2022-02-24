import { Component, OnInit } from '@angular/core';


import {MaintenanceService} from '../maintenance.service'

@Component({
  selector: 'app-maintenance-report',
  templateUrl: './maintenance-report.component.html',
  styleUrls: ['./maintenance-report.component.css']
})
export class MaintenanceReportComponent implements OnInit {
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
