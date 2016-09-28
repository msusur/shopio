export class ShopioSubAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('shopio-sub-app-app h1')).getText();
  }
}
