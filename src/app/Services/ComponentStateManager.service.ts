import { Injectable } from '@angular/core';
import { ButtonVisibility, ShoppingListModel, ComponentState } from '../Models';

@Injectable()
export class ComponentStateManagerService {
    public initialise(): any {
        let newState = new ButtonVisibility();
        newState.showDelete = true;
        newState.showEdit = true;
        newState.showSave = false;
        return newState;
    }

    public calculate(model: ShoppingListModel): any {
        let state = new ButtonVisibility();
        switch (model.currentMode) {
            case ComponentState.New:
            case ComponentState.Edit:
                state.showDelete = false;
                state.showEdit = false;
                state.showSave = true;
                break;
            case ComponentState.Existing:
                state.showDelete = true;
                state.showEdit = true;
                state.showSave = false;
                break;
        }

        return state;
    }
} 