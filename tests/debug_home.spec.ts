import { test, expect } from '@playwright/test';

test('Debug Home Page', async ({ page }) => {
  page.on('console', msg => console.log(`BROWSER CONSOLE: ${msg.type()}: ${msg.text()}`));
  page.on('pageerror', err => console.log(`BROWSER ERROR: ${err}`));

  await page.goto('/');
  await page.waitForTimeout(3000); // Wait for hydration

  const content = await page.content();
  console.log('PAGE CONTENT LENGTH:', content.length);
  
  if (content.length < 5000) {
      console.log('PAGE CONTENT (SHORT):', content);
  }

  // Check for specific elements
     const heading = await page.getByRole('heading', { name: 'Status de Automação em Tempo Real' }).isVisible();
   console.log('Heading Visible:', heading);
   
   const terminal = await page.getByText('> CARREGANDO SKILLS...').isVisible();
   console.log('Terminal Visible:', terminal);
});
