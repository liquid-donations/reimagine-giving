import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  public user: User;
  constructor() {
    this.user = {
      id: 'Bert',
      weights: {
        Shannon: 75,
        Stoop: 25,
      }
    }
  }

  ngOnInit(): void {
  }

}
