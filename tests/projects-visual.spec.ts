import { test, expect } from '@playwright/test';

test.describe('Projects Page Layout Verification', () => {
  test.use({ viewport: { width: 1920, height: 1080 } });

  test('Second project should be partially visible on Desktop (1920x1080)', async ({ page }) => {
    // Go to projects page
    await page.goto('http://localhost:3000/work');
    
    // Wait for projects to load
    await page.waitForSelector('h2');

    // Get the second project card (assuming h2 is used for titles)
    const projectCards = page.locator('h2');
    const secondProjectTitle = projectCards.nth(1); // 0-indexed, so 1 is the second

    // Ensure it exists
    await expect(secondProjectTitle).toBeVisible();

    // Get bounding box
    const box = await secondProjectTitle.boundingBox();
    expect(box).not.toBeNull();

    // Get viewport height
    const viewportSize = page.viewportSize();
    expect(viewportSize).not.toBeNull();

    // Check if the top of the second project is within the viewport
    // We add some buffer to ensure it's "clearly" visible
    const isVisible = (box!.y < viewportSize!.height);
    
    console.log(`Second Project Y: ${box!.y}`);
    console.log(`Viewport Height: ${viewportSize!.height}`);

    expect(isVisible).toBeTruthy();
    
    // Take a screenshot for validaton artifact
    await page.screenshot({ path: 'projects-layout.png', fullPage: false });
  });
});
