import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login.page.js';

test('test', async ({ page }) => {
    
  const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretpassword!');
    await page.getByRole('button', { name: ' Login' }).click();
});
