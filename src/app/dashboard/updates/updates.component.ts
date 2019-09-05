import {Component, OnInit} from '@angular/core';
import {Pet} from '../../pet/pet.model';
import {PetService} from '../../pet/pet.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  // pets: Pet[] = [];
  pets;

  constructor(pets: PetService) {
    pets.getPets().subscribe(response => {
      console.log(response);
      this.pets = response.pets;
    });
  }

  ngOnInit() { }

}
