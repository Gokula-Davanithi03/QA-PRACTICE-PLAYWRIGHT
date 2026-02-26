import { test, expect } from '@playwright/test';
import { SauceLogin } from '../../Pages/Sauce.page.js';

test('ENT TO END', async ({ page }) => {

 // Create an instance of the SauceLogin class
 const login = new SauceLogin(page);
 // Navigate to the application and log in
 await login.goto();
 await login.login('standard_user','secret_sauce');

  // Click on the product 
  await login.product();

  // Click on the add to cart button
  await login.addToCart();

  // Click on the shopping cart 
  await login.shoppingCart.click();

  // Click on the checkout button
  await login.clickCheckout();

// Fill in the checkout information
  await login.fillCheckout('Shalini','Nair','600044');

// Click on the finish button
  await login.finish();

  // Verify the checkout complete URL
  await expect(page).toHaveURL(/checkout-complete/);


// Click on the back home button
  await login.backHome();

// Click on the logout button
  await login.logout();

});