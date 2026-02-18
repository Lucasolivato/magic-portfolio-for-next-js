import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 15 Pro Max'] });

test('Verify "About" button layout on iPhone 15 Pro Max', async ({ page }) => {
  console.log('Navigating to Home on iPhone 15 Pro Max...');
  await page.goto('http://localhost:3000');
  
  // Check if "About" button is visible
  const aboutButton = page.locator('a[href="/about"]');
  await expect(aboutButton).toBeVisible();
  
  // Check bounding box to ensure it has valid dimensions
  const box = await aboutButton.boundingBox();
  expect(box).not.toBeNull();
  if (box) {
      console.log(`About button dimensions: ${box.width}x${box.height} at (${box.x}, ${box.y})`);
      expect(box.width).toBeGreaterThan(0);
      expect(box.height).toBeGreaterThan(0);
  }

  // Screenshot for visual confirmation
  await page.screenshot({ path: 'validation_screenshots/iphone15promax_home.png', fullPage: false });
  console.log('Screenshot saved to validation_screenshots/iphone15promax_home.png');
});

test('Verify basic navigation flow on mobile', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Navigate to About
  await page.click('a[href="/about"]');
  await expect(page).toHaveURL(/.*about/);
  await page.screenshot({ path: 'validation_screenshots/iphone15promax_about.png' });

  // Navigate back home (or verify header links if available on mobile menu)
  await page.goto('http://localhost:3000');
  
  // Navigate to CV download (check attribute only since it downloads)
  const cvButton = page.locator('a[href*=".pdf"]');
  await expect(cvButton).toBeVisible();
  await expect(cvButton).toHaveAttribute('download', '');
});
