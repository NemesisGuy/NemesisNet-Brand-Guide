const puppeteer = require('puppeteer');
(async () => {
  const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const pg = await b.newPage();
  await pg.setViewport({ width: 375, height: 812 });
  await pg.goto('http://localhost:8082', { waitUntil: 'networkidle0' });
  const r = await pg.evaluate(() => {
    const d = document.querySelector('.demo-buttons');
    const btns = document.querySelectorAll('.demo-buttons .btn');
    const cs = d ? getComputedStyle(d) : null;
    const bcs = btns.length ? getComputedStyle(btns[0]) : null;
    const rects = Array.from(btns).map(btn => {
      const r = btn.getBoundingClientRect();
      return { top: r.top, height: r.height, bottom: r.bottom, text: btn.textContent };
    });
    return {
      display: cs?.display,
      flexDirection: cs?.flexDirection,
      gap: cs?.gap,
      btnMargin: bcs?.margin,
      btnDisplay: bcs?.display,
      btnWidth: bcs?.width,
      btnCount: btns.length,
      rects
    };
  });
  console.log(JSON.stringify(r, null, 2));
  await b.close();
})();