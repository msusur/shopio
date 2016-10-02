import { Component } from '@angular/core';

@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    inputs:['model']
})
export class ShoppingListComponent {
    private model: ShoppingListModel;


}

export class ShoppingListModel {
    public title: string;
    public items : ListItem[];
}

export class ListItem {
    public name: string;
    public checked: boolean;
    public price: string;
}