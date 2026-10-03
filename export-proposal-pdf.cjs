const puppeteer = require('puppeteer');
const path = require('path');

const pages = [
  { file: 'proposal_page_1.html', output: 'My-Uni-Pay_Proposal_Cover.pdf' },
  { file: 'proposal_page_2.html', output: 'My-Uni-Pay_Proposal_Problem.pdf' },
  { file: 'proposal_page_3.html', output: 'My-Uni-Pay_Proposal_Solution.pdf' },
  { file: 'proposal_page_4.html', output: 'My-Uni-Pay_Proposal_NextSteps.pdf' },
];

(async () => {
  console.log('🚀 Launching headless browser...');

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const page of pages) {
    const tab = await browser.newPage();

    // A4 portrait: 210mm x 297mm = 794 x 1123px at 96dpi
    await tab.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

    const filePath = `file://${path.resolve(__dirname, page.file)}`;
    console.log(`📄 Rendering: ${page.file}`);

    await tab.goto(filePath, { waitUntil: 'networkidle0', timeout: 30000 });

    // Small delay to allow fonts and images to fully render
    await new Promise(r => setTimeout(r, 1000));

    await tab.pdf({
      path: path.resolve(__dirname, page.output),
      // A4 portrait dimensions
      width: '210mm',
      height: '297mm',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      scale: 1,
    });

    console.log(`   ✅ Saved: ${page.output}`);
    await tab.close();
  }

  await browser.close();

  console.log('\n🎉 All 4 pages exported successfully!');
  console.log('📁 Files saved in: ' + __dirname);
})();
