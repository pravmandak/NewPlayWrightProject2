// @ts-check
// To import all the playwright methods and functions to our script
import { test, expect } from '@playwright/test';


test('TC_01 : Verify SignIN Functionality', async ({ page }) => {
  
  let URL = 'https://prople.pro/login#/login';
  await page.goto(URL);

  let pageTile = await page.title();  //to fetch the title of the page
  
  //Assertions : verifying something is coming as expected or not 
  await expect(pageTile).toBe('PROPLE - HRMS');

  let urtlOfThePage = page.url();  //actual URL of the page
  await expect(URL).toBe(urtlOfThePage);

  //To verify al the elements on the SignIN page
  // I need to declare all the locators of the elements
  const appLogo = page.locator('[src="https://prople.pro/assets/prople_1-DBiwz8Hf.png"]')
  const welcomeBack =  page.getByRole('heading', { name: 'Welcome Back' });
  const bankSecurity = page.getByRole('heading', {name: 'Bank-Grade Security'});
  const emailTextbox = page.getByPlaceholder('john@company.com');
  const signInButton = page.getByRole('button', { name: 'Sign In' });

  //Verifying the elements are visible on the page
  await expect(appLogo).toBeVisible();
  await expect(welcomeBack).toBeVisible();
  await expect(bankSecurity).toBeVisible();
  await expect(emailTextbox).toBeVisible();
  await expect(signInButton).toBeVisible();





}




);
