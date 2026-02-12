
import { test, expect } from '@playwright/test';

test('Facebook Login UI Test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Assertions before login
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#pass')).toBeVisible();

  // Fill data
  await page.fill('#email', 'Gokula');
  await page.fill('#pass', 'Davanithi');

  // Check values entered
  await expect(page.locator('#email')).toHaveValue('Gokula');
  await expect(page.locator('#pass')).toHaveValue('Davanithi');

  // Login button visible
  await expect(page.locator('button[name="login"]')).toBeVisible();
});
