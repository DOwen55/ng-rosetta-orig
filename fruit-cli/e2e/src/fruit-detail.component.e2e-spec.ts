import { protractor, browser, element, by, By, $, $$, ExpectedConditions, ElementFinder } from 'protractor';

describe('Fruit Detail page', () => {

  beforeEach(() => {
    // Ensure we load the page specified by the baseUrl property the config file.
    browser.get('/');

    // Advance from the Home route to the FruitList route.
    element(by.buttonText('Sign In')).click();

    // Retrieve a handle to a cell in the Wijmo Flexgrid and pass a click event on it to simulate clicking the grid row.
    // This will advance the test to the FruitDetail route.
    const fruitRows = $$('[wj-part="cells"] .wj-row');
    const fruitRow = fruitRows.get(1);
    const fruitCols = fruitRow.$$('.wj-cell');
    const fruitCell = fruitCols.get(1);
    fruitCell.click();
  });

  it('Should contain "Fruit Detail View" in the Header Text', () => {
    // Note $$('h1') is same as element.all(by.css('h1'))
    $$('h1').get(1).getText().then((headerText: string) => {
      expect(headerText).toBe('Fruit Detail');
    });
  });

  it('Should contain info about Fruit Region', () => {
    const labelName = 'Region';
    // Use xpath to locate a specific label name and then its corresponding input field
    const inputField = element(by.xpath(`//label[. = '${labelName}']/following-sibling::input`));

    inputField.getAttribute('value').then((fruitRegion: string) => {
      expect(fruitRegion).toBe('Mediteranian');
    });
  });

  it('Should verify that the wikipedia page specific to the selected fruit is being visited', () => {
    // A pause is required to allow the browser to render the component in order to recieve the click event.
    browser.driver.sleep(2000);

    // Click on the image anchor embedded in the fruititem-image component.
    $('app-fruit-image div a').click().then(() => {
      browser.getAllWindowHandles().then((handles: string[]) => {
        const newWindowHandle = handles[1]; // this is the new window

        browser.switchTo().window(newWindowHandle).then(() => {
          expect(browser.driver.getCurrentUrl()).toContain('en.wikipedia.org/wiki');
        });
      });
    });
  });
});
