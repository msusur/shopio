import { Component, OnInit } from '@angular/core';
import { ListService, ShoppingListModel } from '../../Services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  private lists: ShoppingListModel;
  
  items = [
    { text: 'New' },
    { text: 'Archieve' },
    { text: 'Delete' }
  ];

  progress: number = 0;

  constructor(private listService: ListService) {
  }

  ngOnInit(){
    this.lists = this.listService.getLists();
  }

}
