import { test, expect } from '@playwright/test';

test('Health Check', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Portfólio/);
  console.log('Homepage is healthy');
});
