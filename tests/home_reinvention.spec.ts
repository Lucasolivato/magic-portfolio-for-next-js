import { test, expect } from '@playwright/test';

test.describe('Home Page Reinvention', () => {
  test('Should render Tech Stack Terminal and Interactive Dashboard', async ({ page }) => {
    await page.goto('/');

    // Check for "Once UI" removal in Footer
    const footer = page.locator('footer');
    await expect(footer).not.toContainText('Build your portfolio with Once UI');

    // Check for Automation Dashboard (Portuguese)
    await expect(page.getByRole('heading', { name: 'Status de Automação em Tempo Real' })).toBeVisible();
    await expect(page.getByText('Status do Sistema')).toBeVisible();

    // Check for "View Details" button
    await expect(page.getByRole('link', { name: 'Ver Detalhes do Case' })).toBeVisible();

    // Check for Tech Stack Terminal section (Portuguese)
    await expect(page.getByRole('heading', { name: 'Arsenal Técnico' })).toBeVisible();
    
    // Check for Terminal content (wait for typing effect)
    await expect(page.getByText('> CARREGANDO SKILLS...')).toBeVisible({ timeout: 10000 });
  });

  test('Interactive Dashboard should have hover effect class', async ({ page }) => {
      await page.goto('/');
      const dashboardCard = page.locator('.interactive-dashboard');
      await expect(dashboardCard).toBeVisible();
  });
});
