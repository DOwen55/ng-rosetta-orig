import { protractor, browser, element, by, By, $, $$, ExpectedConditions, ElementFinder } from 'protractor';

describe('Fruit Homepage', () => {

    beforeEach(() => {
        browser.get('/'); // get baseUrl fom conf.js
    });

    it('Should contain Home header Text', () => {
        $$('h1').get(1).getText().then((headerText: string) => {
            expect(headerText).toBe('Home Component');
        });
    });

    it('Should contain SignIn button', () => {
        const signIn = $$('#btnSignIn').get(0);

        signIn.getText().then((buttonText: string) => {
            expect(buttonText).toBe('Sign In');
        });
    });

    it('Should contain default Sign in credentials', () => {
        const username = $('input[name="txtUserName"]');
        const password = $('input[name="txtPassword"]');

        // Clear input fields, then pass in username and password for Sign In
        username.clear().then(() => {
            username.sendKeys('DavidOwen');
        });

        password.clear().then(() => {
            password.sendKeys('cr@zy88');
        });

        username.getAttribute('value').then((usernameTxt: string) => {
            expect(usernameTxt).toContain('DavidOwen');
        });

        password.getAttribute('value').then((passwordTxt: string) => {
            expect(passwordTxt).toContain('cr@zy88');
        });
    });

    it('Should check that fruit-list page is being visited', () => {
        const fruitListPage = '/fruit-list';

        element(by.buttonText('Sign In')).click(); // Click button

        browser.getAllWindowHandles().then(() => {
            expect(browser.getCurrentUrl()).toContain(fruitListPage);
        });
    });
});
