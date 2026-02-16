import { test, expect } from '@playwright/test';
import path from 'path';

test('Verify Technical Case Page', async ({ page }) => {
  // Debug: Log browser console
  page.on('console', msg => console.log(`BROWSER CONSOLE: ${msg.text()}`));
  page.on('pageerror', err => console.log(`BROWSER ERROR: ${err}`));

  console.log('Navigating to Technical Case Page...');
  try {
    const response = await page.goto('/work/portfolio-automation', { timeout: 60000 });
    console.log(`Navigation status: ${response?.status()}`);
  } catch (e) {
    console.error(`Navigation failed: ${e}`);
    throw e;
  }
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector('body', { state: 'visible' });

  // Verify Title
  await expect(page.locator('h1, h2:has-text("Automação e Acessibilidade do Portfólio")').first()).toBeVisible();

  // Debug: Log all image sources
  const images = await page.locator('img').all();
  for (const img of images) {
    const src = await img.getAttribute('src');
    console.log(`Image src found: ${src}`);
  }

  // Verify "Before" Image
  await expect(page.getByAltText('Interface antes das correções mostrando problemas de contraste e falta de elementos')).toBeVisible();

  // Verify "After" Image
  await expect(page.getByAltText('Interface atual otimizada e acessível')).toBeVisible();
  
  // Take a screenshot of the page
  const screenshotDir = 'verification_screenshots';
  await page.screenshot({ path: path.join(screenshotDir, 'technical_case_page.png'), fullPage: true });
  console.log('Screenshot taken at verification_screenshots/technical_case_page.png');
});
