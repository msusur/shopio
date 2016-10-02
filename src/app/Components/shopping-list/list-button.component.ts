import { Component } from '@angular/core';
import { ShoppingListModel } from '../../Services/list.service';

@Component({
    selector: 'list-button',
    templateUrl: './list-button.component.html',
    inputs: ['currentList']
})
export class ListButtonComponent {
    private currentList: ShoppingListModel;

    constructor() {
    }
}