import { test, expect } from '@playwright/test';
import { Login } from '../../Pages/Sauce.page.js';

test('test', async ({ page }) => {
 
 const login = new Login(page);
 await login.goto();
 await login.login('standard_user','secret_sauce');

 await page.getByText('Name (A to Z)Name (A to Z)').click();
 await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
 await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();


});