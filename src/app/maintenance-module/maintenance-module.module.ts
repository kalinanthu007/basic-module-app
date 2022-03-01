import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMaintenanceServiceComponent } from './list-maintenance-service/list-maintenance-service.component';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report.component';

import {HttpClientModule} from '@angular/common/http';
import { ParentMaintenanceComponent } from './parent-maintenance/parent-maintenance.component'


@NgModule({
  declarations: [
    ListMaintenanceServiceComponent,
    MaintenanceReportComponent,
    ParentMaintenanceComponent
  ],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports:[ListMaintenanceServiceComponent,MaintenanceReportComponent,ParentMaintenanceComponent]

})
export class MaintenanceModuleModule { }
