import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMaintenanceServiceComponent } from './list-maintenance-service/list-maintenance-service.component';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report.component';

import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    ListMaintenanceServiceComponent,
    MaintenanceReportComponent
  ],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports:[ListMaintenanceServiceComponent,MaintenanceReportComponent]

})
export class MaintenanceModuleModule { }
