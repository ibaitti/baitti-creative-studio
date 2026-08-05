const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const errors = [];
  const networkFailures = [];

  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      errors.push(`[${msg.type()}] ${msg.text()}`);
    }
  });

  page.on('requestfailed', request => {
    networkFailures.push(`${request.url()} - ${request.failure().errorText}`);
  });

  page.on('response', response => {
    if (!response.ok()) {
      networkFailures.push(`${response.url()} - ${response.status()}`);
    }
  });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    console.log("=== Console Errors ===");
    console.log(errors.join("\n"));
    console.log("=== Network Failures ===");
    console.log(networkFailures.join("\n"));
  } catch (e) {
    console.error("Navigation failed:", e);
  }

  await browser.close();
})();
