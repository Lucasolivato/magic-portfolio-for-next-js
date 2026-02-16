import { test } from '@playwright/test';
import fs from 'fs';

test('Dump Page HTML', async ({ page }) => {
  try {
    const response = await page.goto('/work/portfolio-automation');
    console.log(`Status: ${response?.status()}`);
    
    await page.waitForTimeout(2000); // Wait a bit for JS to hydrate
    
    const content = await page.content();
    fs.writeFileSync('debug_page_dump.html', content);
    console.log('Page content dumped to debug_page_dump.html');
  } catch (e) {
    console.error('Error loading page:', e);
  }
});
