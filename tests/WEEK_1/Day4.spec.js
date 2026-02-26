import { test, expect } from '@playwright/test';

test('Facebook Login Fill Demo', async ({ page }) => {

 await page.goto('https://www.facebook.com/', {
  waitUntil: 'domcontentloaded',
 });

 // Try to handle cookie popup
 const allowCookies = page.locator('text=Allow all cookies');

 if (await allowCookies.isVisible().catch(() => false)) {
  await allowCookies.click();
 }

 // Try multiple possible selectors
 const emailInput = page.locator('#email, input[name="email"]');

 await expect(emailInput.first()).toBeVisible({ timeout: 20000 });

 await emailInput.first().fill('testuser');
});