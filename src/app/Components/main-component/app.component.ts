import { Component, OnInit } from '@angular/core';
import { ShoppingListModel } from '../../Models';
import { ListService } from '../../Services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  private lists: ShoppingListModel[];

  items = [
    { text: 'New' },
    { text: 'Archieve' },
    { text: 'Delete' }
  ];

  progress: number = 0;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.lists = this.listService.getLists();
  }

  public createNew(): void {
    this.lists.push(ShoppingListModel.createEmpty());
  }
  public deleteItem(item: ShoppingListModel): void {
    let index = this.lists.indexOf(item, 0);
    if(index > -1){
      this.lists.splice(index, 1);
    }
  }

}
