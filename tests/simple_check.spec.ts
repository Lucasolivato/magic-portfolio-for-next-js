import { test, expect } from '@playwright/test';

test('Simple Page Check', async ({ page }) => {
  console.log('Navigating to /');
  await page.goto('/');
  console.log('Navigated. Checking title.');
  await expect(page).toHaveTitle(/Portfólio/);
  console.log('Title checked.');
});
