
import { test, expect } from '@playwright/test';

test('Facebook Login UI Test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Assertions before login
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#pass')).toBeVisible();

  const emailInput = page.locator('#email, input[name="email"]');

  // Fill data
  await emailInput.fill('Gokula');
  //await page.fill('#pass', 'Davanithi');

  // Check values entered
  await expect(page.locator('#email')).toHaveValue('Gokula');
 

  // Login button visible
  await expect(page.locator('button[name="login"]')).toBeVisible();
});
