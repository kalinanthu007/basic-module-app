import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  maintenanceListURL= "https://reqres.in/api/users?page=2";
  constructor(private http: HttpClient) {

  }

  // List Maintenance Service Name
  listServiceName() {
    return this.http.get(this.maintenanceListURL);
  }
}

