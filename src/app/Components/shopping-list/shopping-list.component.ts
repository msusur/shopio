import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { ShoppingListModel, ListItem } from '../../Models';

@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    inputs: ['model'],
})
export class ShoppingListComponent {
    private model: ShoppingListModel;

    @Output() onDeleteItem : EventEmitter<ShoppingListModel> = new EventEmitter();

    constructor() {

    }

    public addNew() {
        this.model.items.push(new ListItem('', 1, false, ''));
    }

    public deleteItem(event: ShoppingListModel){
        if(event !== null){
            this.onDeleteItem.emit(this.model);
        }
    }
}