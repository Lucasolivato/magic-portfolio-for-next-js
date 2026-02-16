import { test, expect } from '@playwright/test';
import path from 'path';

const projectUrl = '/work/portfolio-automation';

test.describe('Automation Dashboard Responsiveness', () => {

  test('Should render correctly on Desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(projectUrl, { timeout: 60000 });
    await page.waitForLoadState('domcontentloaded');
    
    // Check for Dashboard presence
    const dashboard = page.locator('h3:has-text("System Status")');
    await expect(dashboard).toBeVisible();

    // Verification screenshot
    const screenshotDir = 'verification_screenshots';
    await page.screenshot({ path: path.join(screenshotDir, 'dashboard_desktop.png'), fullPage: false });
    console.log('Desktop screenshot taken.');
  });

  test('Should render correctly on iPhone 12', async ({ page }) => {
    // iPhone 12 viewport
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(projectUrl, { timeout: 60000 });
    await page.waitForLoadState('domcontentloaded');
    
    // Check for Dashboard presence
    const dashboard = page.locator('h3:has-text("System Status")');
    await expect(dashboard).toBeVisible();

    // Verify Mobile Layout (Flex column)
    // We expect the "System Status" text to be visible without horizontal scroll issues
    // Just capturing the screenshot is the primary validation requested by the user for now
    
    // Verification screenshot
    const screenshotDir = 'verification_screenshots';
    await page.screenshot({ path: path.join(screenshotDir, 'dashboard_iphone12.png'), fullPage: false });
    console.log('iPhone 12 screenshot taken.');
  });
});
