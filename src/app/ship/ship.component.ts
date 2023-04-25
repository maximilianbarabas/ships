/*
* File: ship.component.ts
* Author: Balogh Csenge
* Copyright: 2021, Balogh Csenge
* Group: Szoft_II_N
* Date: 2023-04-07
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  constructor(private api: ApiService) { }
  ships!:any

  fetchAllShips() {
    this.api.fetchAllShips().subscribe({
      next: (data:any) => {
        console.log(data);
        this.ships = data
        
      },
      error: (e) => {
        console.log(e);
        
      }
    })
  }

  ngOnInit(): void {
    this.fetchAllShips()
  }

}
