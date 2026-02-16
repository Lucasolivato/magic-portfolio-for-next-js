import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Debug Accessibility Violations', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector('body', { state: 'visible' });

  const a11yResults = await new AxeBuilder({ page }).analyze();
  
  let logContent = '';
  if (a11yResults.violations.length > 0) {
    logContent += 'Violations found:\n';
    a11yResults.violations.forEach(v => {
      logContent += `\nRule: ${v.id}\n`;
      logContent += `Description: ${v.description}\n`;
      logContent += 'Nodes:\n';
      v.nodes.forEach(n => {
        logContent += `- HTML: ${n.html}\n`;
        // logContent += `  Target: ${n.target}\n`; // Target is complex object sometimes
      });
    });
  } else {
    logContent += 'No violations found!\n';
  }
  
  const fs = require('fs');
  fs.writeFileSync('debug_a11y_output.txt', logContent);
  console.log('Logs written to debug_a11y_output.txt');
});
