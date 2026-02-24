import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login.page.js';

test.describe('Login Tests', () => {

test('Valid', async ({ page }) => {
    
  const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    
    //ASSERTION
    //await expect(loginPage.successMessage).toBeVisible();
    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
    await expect(page).toHaveURL(/secure/);
});

test('Unvalid', async ({ page }) => {
    
  const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('Smirthi', 'duplicatepassword!');
   // await expect(loginPage.errorMessage).toBeVisible();
   await expect(loginPage.flashMessage).toContainText('Your username is invalid!'); 
});

test('Empty', async ({ page }) => {
    
  const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('', '');
   // await page.getByRole('button', { name: ' Login' }).click();
//    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
});

test('Min', async ({ page }) => {
    
  const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('ts', 'ss!');
    //await page.getByRole('button', { name: ' Login' }).click();
    //await expect(loginPage.errorMessage).toBeVisible();
});

test('Max', async ({ page }) => {
    
  const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmithjoyceferaldgoergeeinstestepjenhjohthnmarytonfathimabanu', 'Sdvuksuicidewhytheidiotdonelikethatehyshouldibehacelikestarender');
    //await page.getByRole('button', { name: ' Login' }).click();
    //await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
});
});