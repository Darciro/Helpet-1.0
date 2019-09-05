import { Component, OnInit } from '@angular/core';
import {Pet} from './pet.model';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pets: Pet[] = [];

  constructor() { }

  ngOnInit() {
  }

}
