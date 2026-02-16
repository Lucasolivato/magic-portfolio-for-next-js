import { test } from '@playwright/test';
import path from 'path';

test('Capture After Fixes Screenshot', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector('body', { state: 'visible' });

  const screenshotDir = 'public/images/projects/portfolio-automation';
  
  await page.screenshot({ path: path.join(screenshotDir, 'after-fixes.png'), fullPage: true });
  console.log('Screenshot taken at public/images/projects/portfolio-automation/after-fixes.png');
});
