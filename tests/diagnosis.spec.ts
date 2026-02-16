import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

const reportPath = 'diagnostico_portfolio.md';

test('Diagnose Portfolio', async ({ page }) => {
  // 1. Navigation & Content Capture
  console.log('Navigating to homepage...');
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  // Wait for some content to be visible to ensure hydration
  await page.waitForSelector('body', { state: 'visible' });

  // Initialize report
  let reportContent = '# Relatório de Diagnóstico do Portfólio\n\n';
  reportContent += `Data: ${new Date().toLocaleString()}\n\n`;

  // Screenshots
  const screenshotDir = 'diagnosis_screenshots';
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }
  
  try {
    console.log(`Current Working Directory: ${process.cwd()}`);
    console.log(`Target Screenshot Path: ${path.resolve(screenshotDir, 'homepage_full.png')}`);
    await page.screenshot({ path: path.join(screenshotDir, 'homepage_full.png'), fullPage: true });
    reportContent += 'Screenshot da página completa salvo em `diagnosis_screenshots/homepage_full.png`.\n\n';
  } catch (e) {
    console.error('Screenshot failed:', e);
    reportContent += `Erro ao capturar screenshot: ${e}\n\n`;
  }

  // 2. Performance Analysis
  const performanceTiming = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return nav ? JSON.stringify({
      loadEventEnd: nav.loadEventEnd,
      domContentLoadedEventEnd: nav.domContentLoadedEventEnd,
      duration: nav.duration
    }) : JSON.stringify(performance.timing);
  });
  
  const timing = JSON.parse(performanceTiming);
  
  reportContent += '## 2. Análise de Desempenho (Básica)\n\n';
  reportContent += `- Duração Total (Duration): ${timing.duration?.toFixed(2) || 'N/A'}ms\n`;
  // content visibility check
  const fcp = await page.evaluate(async () => {
    return new Promise(resolve => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) resolve(entries[0].startTime);
      }).observe({ type: 'paint', buffered: true });
      setTimeout(() => resolve('N/A'), 3000);
    });
  });
  reportContent += `- First Contentful Paint (estimado): ${fcp !== 'N/A' ? Number(fcp).toFixed(2) : 'N/A'}ms\n\n`;
  
  // 3. Accessibility & SEO
  reportContent += '## 3. Acessibilidade e SEO\n\n';
  
  // SEO
  const title = await page.title();
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content').catch(() => 'Não encontrado');
  const h1s = await page.locator('h1').allTextContents();
  const h2s = await page.locator('h2').allTextContents();
  
  reportContent += '### SEO Básico\n';
  reportContent += `- Título: "${title}"\n`;
  reportContent += `- Meta Description: "${metaDescription !== 'Não encontrado' ? metaDescription : '⚠️ AUSENTE'}"\n`;
  reportContent += `- H1s: ${h1s.length > 0 ? h1s.map(h => `"${h}"`).join(', ') : '⚠️ NENHUM H1 ENCONTRADO'}\n`;
  reportContent += `- H2s: ${h2s.length} encontrados\n\n`;

  // Accessibility
  try {
    const a11yResults = await new AxeBuilder({ page }).analyze();
    reportContent += `### Acessibilidade (Axe-core)\n`;
    reportContent += `- Total de Violações: ${a11yResults.violations.length}\n`;
    
    if (a11yResults.violations.length > 0) {
      reportContent += '\nDetalhes das violações encontradas:\n';
      a11yResults.violations.forEach(v => {
        reportContent += `- **${v.id}** (${v.impact}): ${v.description} (Ocorre ${v.nodes.length} vezes)\n`;
      });
    } else {
      reportContent += `- ✅ Nenhuma violação automática de acessibilidade detectada.\n`;
    }
  } catch (e) {
    reportContent += `Erro ao executar teste de acessibilidade: ${e}\n`;
  }
  
  reportContent += '\n';

  // 4. User Journey Simulation (Simulated)
  reportContent += '## 4. Mapeamento da Jornada do Usuário\n\n';
  
  // Recruiter Journey (Find CV/Contact)
  const contactLinks = await page.locator('a[href*="mailto"], a[href*="linkedin"], button:has-text("Contact"), button:has-text("Contato")').count();
  reportContent += `### Jornada do Recrutador\n`;
  reportContent += `- Links/Botões de contato encontrados: ${contactLinks}\n`;
  
  // Check for CV download
  const cvLinks = await page.locator('a[href*=".pdf"], a:has-text("CV"), a:has-text("Currículo"), a:has-text("Resume")').count();
  reportContent += `- Links para CV encontrados: ${cvLinks} ${cvLinks === 0 ? '(⚠️ CRÍTICO: Nenhum link de CV óbvio encontrado)' : ''}\n\n`;

  // Tech Lead Journey (Find Projects)
  const projectLinks = await page.locator('a[href*="github"], a[href*="projects"], section:has-text("Projects"), section:has-text("Projetos")').count();
  reportContent += `### Jornada do Tech Lead\n`;
  reportContent += `- Elementos relacionados a projetos/GitHub encontrados: ${projectLinks}\n\n`;

  // 5. Structure & Layout Analysis
  const mainText = await page.locator('body').innerText();
  const wordCount = mainText.split(/\s+/).length;
  reportContent += '## 5. Análise de Conteúdo\n\n';
  reportContent += `- Contagem aproximada de palavras (visíveis): ${wordCount}\n`;
  reportContent += `- Texto da primeira dobra (aproximado): \n> "${mainText.substring(0, 300).replace(/\n/g, ' ')}..."\n\n`;

  // Write report
  fs.writeFileSync(reportPath, reportContent);
  console.log(`Report generated at ${reportPath}`);
});
