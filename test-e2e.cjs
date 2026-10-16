const puppeteer = require('puppeteer-core');
const path = require('path');

async function runTests() {
  console.log('🚀 Starting Chrome Headless E2E Verification...');

  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--use-gl=angle', '--use-angle=metal']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  console.log('🌐 Navigating to http://localhost:5180/ ...');
  await page.goto('http://localhost:5180/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));

  console.log('📸 Taking Section Screenshots...');

  // 1. Hero Screenshot
  await page.screenshot({ path: 'screenshot_01_hero.png' });
  console.log('  ✓ Hero captured: screenshot_01_hero.png');

  // 2. Scroll to About
  await page.evaluate(() => document.getElementById('about')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot_02_about.png' });
  console.log('  ✓ About captured: screenshot_02_about.png');

  // 3. Scroll to Playground
  await page.evaluate(() => document.getElementById('playground')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot_03_playground.png' });
  console.log('  ✓ Playground captured: screenshot_03_playground.png');

  // 4. Scroll to Skills
  await page.evaluate(() => document.getElementById('skills')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot_04_skills.png' });
  console.log('  ✓ Skills captured: screenshot_04_skills.png');

  // 5. Scroll to Projects
  await page.evaluate(() => document.getElementById('projects')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot_05_projects.png' });
  console.log('  ✓ Projects captured: screenshot_05_projects.png');

  // 6. Scroll to Certificates
  await page.evaluate(() => document.getElementById('certificates')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot_06_certificates.png' });
  console.log('  ✓ Certificates captured: screenshot_06_certificates.png');

  // 7. Scroll to Contact
  await page.evaluate(() => document.getElementById('contact')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot_07_contact.png' });
  console.log('  ✓ Contact captured: screenshot_07_contact.png');

  // Verify Links
  console.log('🔗 Verifying Mandatory URLs & Buttons...');
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a')).map(a => ({
      text: a.innerText.trim(),
      href: a.href,
      target: a.target
    }));
  });

  const liveDemos = links.filter(l => l.text.includes('Live Demo'));
  console.log(`  ✓ Found ${liveDemos.length} Live Demo buttons:`);
  liveDemos.forEach(ld => console.log(`    - ${ld.href}`));

  const sourceCodes = links.filter(l => l.text.includes('View Source Code') || l.text.includes('GitHub'));
  console.log(`  ✓ Found ${sourceCodes.length} Source / GitHub links:`);
  sourceCodes.forEach(sc => console.log(`    - ${sc.text} -> ${sc.href}`));

  // Verify Form Validation
  console.log('📝 Testing Contact Form Validation...');
  await page.evaluate(() => {
    const btn = document.querySelector('#contact form button[type="submit"]');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 400));
  const errorCount = await page.evaluate(() => {
    return document.querySelectorAll('#contact form p.text-red-400').length;
  });
  console.log(`  ✓ Form validation triggered: ${errorCount} error messages displayed.`);

  if (consoleErrors.length > 0) {
    console.warn('⚠️ Console errors detected:', consoleErrors);
  } else {
    console.log('🎉 0 Console / Runtime Errors detected!');
  }

  await browser.close();
  console.log('✅ E2E Verification Complete!');
}

runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
