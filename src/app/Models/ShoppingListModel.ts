import { ComponentState } from './ComponentState'; 
import { ListItem } from './ListItem'; 

export class ShoppingListModel {
  public currentMode : ComponentState;

  constructor(public title: string, public items: ListItem[]) {
    this.currentMode = ComponentState.Existing;
  }

  public static createEmpty(): ShoppingListModel {
    let newModel = new ShoppingListModel('', []);
    newModel.currentMode = ComponentState.New; 
    return newModel;
  }
}