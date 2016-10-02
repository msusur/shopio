import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists = [
    {title: 'Shopping List 1', items : [
      {name: 'Bread', checked: false},
      {name: 'Banana', checked: true},
      {name: 'Pizza', checked: false},
      {name: 'Toothbrush', checked: false},
      {name: 'Olive Oil', checked: false},
    ]}
  ];
  items = [
    { text: 'New' },
    { text: 'Archieve' },
    { text: 'Delete' }
  ];

  progress: number = 0;

  constructor() {
  }
}
