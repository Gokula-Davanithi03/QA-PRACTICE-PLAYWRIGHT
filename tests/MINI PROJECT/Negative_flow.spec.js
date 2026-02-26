import { test, expect } from '@playwright/test';
import { SauceLogin } from '../../Pages/Sauce.page.js';

test('Negative scenarios', async ({ page }) => {
 
 const login = new SauceLogin(page);
 await login.goto();
 await login.login('user','secret');

//await login.expectErrorMessage();
await expect(page.locator('[data-test="error"]')).toBeVisible(); 

await login.login('standard_user','secret_sauce');

await expect(page).toHaveURL(/inventory/);

});
 