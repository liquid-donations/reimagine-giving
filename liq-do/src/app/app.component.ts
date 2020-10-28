import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liquid-donations';
  data = [
    {
      name: 'Nikola',
      percentage: 25,
    },
    {
      name: 'Sean',
      percentage: 25,
    },
    {
      name: 'Aaron',
      percentage: 50,
    },
  ]
}
