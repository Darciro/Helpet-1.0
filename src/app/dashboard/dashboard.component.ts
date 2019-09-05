import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet/pet.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';
  desc = 'Últimas atualizações sobre os Pets próximos de você';

  constructor() { }

  ngOnInit() {
  }

}
