import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { VehicleReportComponent } from './vehicle-report/vehicle-report.component';

import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    ListVehicleComponent,
    VehicleReportComponent
  ],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports:[ListVehicleComponent,VehicleReportComponent]

})
export class VehicleModuleModule { }
