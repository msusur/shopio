import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ShopioSubAppAppComponent } from '../app/shopio-sub-app.component';

beforeEachProviders(() => [ShopioSubAppAppComponent]);

describe('App: ShopioSubApp', () => {
  it('should create the app',
      inject([ShopioSubAppAppComponent], (app: ShopioSubAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'shopio-sub-app works!\'',
      inject([ShopioSubAppAppComponent], (app: ShopioSubAppAppComponent) => {
    expect(app.title).toEqual('shopio-sub-app works!');
  }));
});
