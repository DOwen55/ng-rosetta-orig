import { protractor, browser, element, by, By, $, $$, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';

describe('Fruit List page', () => {

  beforeEach(() => {
    // Ensure we load the page specified by the baseUrl property the config file.
    browser.get('/');

    // Advance from the Home route to the FruitList route.
    element(by.buttonText('Sign In')).click();
  });

  it('Should contain "Fruit List" in the Header Text', () => {
    // Note: $$('h1') is same as element.all(by.css('h1'))
    $$('h1').get(1).getText().then((headerText: string) => {
      expect(headerText).toBe('Fruit List');
    });
  });

  it('Should contain a certain number of fruits', () => {
    // Extract the wijmo flexgrid row collection.
    const fruitRows = $$('[wj-part="cells"] .wj-row');

    fruitRows.count().then((fruitCount: number) => {
      expect(fruitCount).toBeGreaterThan(2);
    });
  });

  it('Should contain Strawberry Tree on row 1 column 1', () => {
    // Extract the wijmo flexgrid row collection.
    const fruitRows = $$('[wj-part="cells"] .wj-row');

    // Extract the first row from the rows collection.
    const fruitRow = fruitRows.get(1);

    // Extract the first row's cells collection
    const fruitCells = fruitRow.$$('.wj-cell');

    // Examine the contents of the first cell.
    fruitCells.get(0).getText().then((fruitName: string) => {
      expect(fruitName).toBe('Strawberry Tree');
    });
  });

  it('Should verify that fruit-detail page is being visited', () => {
    const fruitDetailRouteURL = '/fruit-detail/1';

    // Extract the wijmo flexgrid row collection.
    const fruitRows = $$('[wj-part="cells"] .wj-row');

    // Extract the first row from the rows collection.
    const fruitRow = fruitRows.get(1);

    // Extract the first row's cells collection
    const fruitCells = fruitRow.$$('.wj-cell');

    // Extract the second cell in the cells collection.
    // (The first cell is the wikipedia link)
    const fruitCell = fruitCells.get(1);

    // Click the cell. This will fire the row's click event.
    fruitCell.click();

    browser.getAllWindowHandles().then(() => {
      expect(browser.getCurrentUrl()).toContain(fruitDetailRouteURL);
    });
  });
});
