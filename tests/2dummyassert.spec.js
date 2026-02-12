import { test, expect } from '@playwright/test';

test.only('dummy login button verification', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  await expect(
    page.getByRole('button', { name: 'Login'})
  ).toBeVisible();

  await page.waitForTimeout(5000);

});