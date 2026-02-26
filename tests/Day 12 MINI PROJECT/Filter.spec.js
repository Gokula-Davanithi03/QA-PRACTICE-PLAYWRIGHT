import { test, expect } from '@playwright/test';
import { SauceLogin } from '../../Pages/Sauce.page.js';

test('Automate the filter selection', async ({ page }) => {
 // Create an instance of the SauceLogin class
 const login = new SauceLogin(page);
 await login.goto();
 await login.login('standard_user','secret_sauce');


 //click on the filter dropdown
 await page.getByText('Name (A to Z)Name (A to Z)').click();
 await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
 await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();


});