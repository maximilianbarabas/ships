/*
* File: form.component.ts
* Author: Balogh Csenge
* Copyright: 2021, Balogh Csenge
* Group: Szoft_II_N
* Date: 2023-04-07
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  addForm!:FormGroup

  constructor(private form: FormBuilder, private api: ApiService) { }

  addShip(data:any) {
    this.api.addShip(data).subscribe({
      next: (data:any) => {
        this.addForm.reset()
        alert("Ship added!")
      },
      error: (e:any) => console.error(e)
      
    })
  }

  onSubmit() {
    const target = this.addForm.value

    let data = {
      id: Math.random()*100,
      name: target.name,
      length: target.length,
      price: target.price,
      person: target.person,
      trailer: target.trailer

    }
    this.addShip(data)
  }

  ngOnInit(): void {

    this.addForm = this.form.group({
      name : new FormControl(''),
      length : new FormControl(''),
      price : new FormControl(''),
      person : new FormControl(''),
      trailer: new FormControl('')
    })
  }

}
