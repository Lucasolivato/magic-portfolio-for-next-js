import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Verify CV Link Implementation', async ({ page }) => {
  console.log('Navigating to homepage...');
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector('body', { state: 'visible' });

  // Check if the CV button exists and has the correct link
  const cvButton = page.locator('a[href="/Curriculo_Lucas_Olivato.pdf"]');
  await expect(cvButton).toBeVisible();
  await expect(cvButton).toHaveText(/Download CV/i);

  // Take a screenshot of the Hero section
  const screenshotDir = 'verification_screenshots';
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }
  
  // Assuming the hero section is the first section or roughly the top part of the page
  // We can try to locate the container of the buttons
  const buttonsContainer = cvButton.locator('..').locator('..'); // Parent of parent (RevealFx -> Column) - approximation
  
  await page.screenshot({ path: path.join(screenshotDir, 'hero_cv_button.png'), clip: { x: 0, y: 0, width: 1280, height: 600 } });
  console.log('Screenshot taken at verification_screenshots/hero_cv_button.png');
});
