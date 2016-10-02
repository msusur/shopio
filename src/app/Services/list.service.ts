import { Injectable } from '@angular/core';
import {  ShoppingListModel, ListItem } from '../Models';

@Injectable()
export class ListService {

  constructor() { }

  public getLists(): any {
    return [
      new ShoppingListModel("Shopping List", [
        new ListItem('Banana', 2, true, '6.22'),
        new ListItem('Banana', 2, false, '6.22'),
        new ListItem('Banana', 2, false, '6.22'),
        new ListItem('Banana', 2, false, '6.22')
      ]),
      new ShoppingListModel("Shopping List 2", [
        new ListItem('Banana', 2, true, '6.22'),
        new ListItem('Banana', 2, false, '6.22'),
        new ListItem('Banana', 2, false, '6.22'),
        new ListItem('Banana', 2, false, '6.22')
      ])
    ];
  }
}