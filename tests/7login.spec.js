const { test, expect } = require('@playwright/test');

test.describe('Swag Labs', () => {

  //Verify Page Title
  test('Swag Labs ', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/); //ASSERTIONS
  });

  //Positive Login
  test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); 

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
  });

  // Negative Login
  test('Login with invalid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'Gokula');
    await page.fill('#password', 'Davanithi');
    await page.click('#login-button');

     await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});