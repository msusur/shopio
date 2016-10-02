import { Component } from '@angular/core';
import { ShoppingListModel } from '../../Services/list.service';

@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    inputs:['model']
})
export class ShoppingListComponent  {
    private model: ShoppingListModel;

    constructor() {
    }
}