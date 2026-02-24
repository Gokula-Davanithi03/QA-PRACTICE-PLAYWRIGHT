

import { test, expect } from '@playwright/test';
test('Dummy Login Page', async ({ page }) => {
  // Go to the dummy login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill in the username
   await page.fill('#username','tomsmith');

  // // Fill in the password
   await page.fill('#password','SuperSecretPassword!');

  // Click the login button
   await page.click('button[type="submit"]');

  // Assert that login was successful
  await expect(page.locator('.flash.success')).toBeVisible();

  // Optional: Log out to complete the flow
 // await page.locator('a[href="/logout"]').click();
  //await expect(page.locator('#username')).toBeVisible();

});
// import { test, expect } from '@playwright/test';

// test('Dummy Login Page', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/login');

//   await page.fill('#username', 'tomsmith');
//   await page.fill('#password', 'SuperSecretPassword!');

//   await page.click('button[type="submit"]');

//   await expect(page.locator('.flash.success')).toBeVisible();
// });
