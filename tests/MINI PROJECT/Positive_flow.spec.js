import { test, expect } from '@playwright/test';
import { Login } from '../../Pages/Sauce.page.js';

test('test', async ({ page }) => {
 
 const login = new Login(page);
 await login.goto();
 await login.login('standard_user','secret_sauce');
 

  // Click on the product 
  await page.locator('[data-test="item-4-img-link"]').click();

  // Click on the add to cart button
  await page.locator('[data-test="add-to-cart"]').click();

  // Click on the shopping cart 
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Click on the checkout button
  await page.locator('[data-test="checkout"]').click();
// Fill in the checkout information
  await login.checkout('Shalini','Nair','600044');
// Click on the continue button
  //await page.locator('[data-test="continue"]').click();
// Verify the checkout complete URL
  await expect(page).toHaveURL(/checkout-complete/);
// Click on the back home button
  await page.getByRole('button', { name: 'Open Menu' }).click();
// Click on the logout button
  await page.locator('[data-test="logout-sidebar-link"]').click();

});