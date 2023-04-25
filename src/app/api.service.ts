/*
* File: api.service.ts
* Author: Balogh Csenge
* Copyright: 2021, Balogh Csenge
* Group: Szoft_II_N
* Date: 2023-04-07
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchAllShips() {
    let endpoint = 'ships'
    let url = environment.apihost + endpoint

    return this.http.get<any>(url)
  }

  addShip(data:any) {
    let endpoint = 'ships'
    let url = environment.apihost + endpoint

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    return this.http.post(url, data, httpOptions)
    
  }
}
