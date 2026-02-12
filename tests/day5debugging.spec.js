import { test, expect } from '@playwright/test';

test('QABrains Login UI Test', async ({ page }) => {
  await page.goto('https://qabrains.com/login');


  // Fill data
  await page.fill('input[name="email"]', 'qa_testers@qabrains.com');
  await page.fill('input[name="password"]', 'Password123');
  await page.locator('button[type="submit"]').click();
});
