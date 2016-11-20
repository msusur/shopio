import { Injectable } from '@angular/core';
import { LocalStorageService } from './storage.service';
import { ShoppingListModel, ListItem } from '../Models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class ListService {

  constructor(private storage: LocalStorageService) {
  }

  public getLists(): Observable<ShoppingListModel[]> {
    let list = this.storage.get('shopping:list');
    return Observable.of(JSON.parse(list));
  }
}