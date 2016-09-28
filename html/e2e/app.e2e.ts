import { ShopioSubAppPage } from './app.po';

describe('shopio-sub-app App', function() {
  let page: ShopioSubAppPage;

  beforeEach(() => {
    page = new ShopioSubAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('shopio-sub-app works!');
  });
});
