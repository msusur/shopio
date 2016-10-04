import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListModel } from '../../Models';
import { ListService, AuthenticationService } from '../../Services';

@Component({
  selector: 'sh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit, OnDestroy {
  private lists: ShoppingListModel[];
  private logoutSubscription: any;

  constructor(private listService: ListService,
    private authService: AuthenticationService,
    private router: Router) {
  }

  public createNew(): void {
    this.lists.push(ShoppingListModel.createEmpty());
  }
  public deleteItem(item: ShoppingListModel): void {
    let index = this.lists.indexOf(item, 0);
    if (index > -1) {
      this.lists.splice(index, 1);
    }
  }

  public logout(): void {
    let result = this.authService.logout();
    this.logoutSubscription = result.subscribe(result => this.router.navigate(['login']));
  }

  ngOnInit() {
    this.lists = this.listService.getLists();
  }

  ngOnDestroy() {
    this.logoutSubscription.unsubscribe();
  }

}
