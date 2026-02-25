import { test, expect } from '@playwright/test';
import { Login } from '../../Pages/Sauce.page.js';

test('test', async ({ page }) => {
 
 const login = new Login(page);
 await login.goto();
 await login.login('user','secret');

await expect(page.locator('[data-test="error"]')).toBeVisible();

await login.login('standard_user','secret_sauce');

await expect(page).toHaveURL(/inventory/);

});
 