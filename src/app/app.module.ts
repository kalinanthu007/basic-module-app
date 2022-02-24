import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import Maintenance Module
import { MaintenanceModuleModule } from './maintenance-module/maintenance-module.module';

// import separate component from Maintenance Module
// import { MaintenanceReportComponent } from './maintenance-module/maintenance-report/maintenance-report.component';

//import Vehicle Module
import { VehicleModuleModule } from './vehicle-module/vehicle-module.module';

// import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaintenanceModuleModule,
    VehicleModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
