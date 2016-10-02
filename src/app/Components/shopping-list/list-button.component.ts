import { Component, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ButtonVisibility, ShoppingListModel, ComponentState } from '../../Models';
import { ComponentStateManagerService } from '../../Services';

@Component({
    selector: 'list-button',
    templateUrl: './list-button.component.html',
    inputs: ['currentList']
})
export class ListButtonComponent implements OnChanges, OnInit {
    private currentList: ShoppingListModel;
    private buttons: ButtonVisibility;

    constructor(private stateService: ComponentStateManagerService) {
        this.buttons = stateService.initialise();
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: any) {
        this.buttons = this.stateService.calculate(changes.currentList.currentValue);
    }

    private onChange(): void {
        this.ngOnChanges({
            currentList: {
                currentValue: this.currentList
            }
        });
    }

    private removeEmptyItems(): void {
        // there must be a better way!
        let rlist = [];
        this.currentList.items.forEach(element => {
            if (!element.name) {
                rlist.push(element);
            }
        });
        rlist.forEach(element => {
            let index = this.currentList.items.indexOf(element, 0);
            if (index > -1) {
                this.currentList.items.splice(index, 1);
            }
        });
    }

    public editClick(): void {
        this.currentList.currentMode = ComponentState.Edit;
        this.onChange();
    }

    public saveClick(): void {
        this.currentList.currentMode = ComponentState.Existing;
        this.removeEmptyItems();
        this.onChange();
    }

    public deleteClick(): void {

    }
}