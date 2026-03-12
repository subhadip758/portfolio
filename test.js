const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', exception => console.log('PAGE ERROR:', exception));
  await page.goto('http://localhost:5176', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  await browser.close();
})();
