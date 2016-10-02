import { Component, ViewChild } from '@angular/core';
import { ShoppingListModel, ListItem } from '../../Models';

@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    inputs: ['model'],
})
export class ShoppingListComponent {
    private model: ShoppingListModel;

    constructor() {

    }

    public addNew() {
        this.model.items.push(new ListItem('', 1, false, ''));
    }
}