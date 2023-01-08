/*
Author : Arif Siddik M.
Domisili : Cilegon, Banten 
Web : http://arifsiddikm.com/
Instagram : http://instagram.com/arifsiddikm/
LinkedIn : http://linkedin.com/in/arif-siddik-muharam/
GitHub : http://github.com/arifsiddikm/
Saweria : http://saweria.co/arifsiddikm
Tujuan Projek : WebScraping untuk Generate PDF sebuah laman website menggunakan JavaScript.
*/
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://arifsiddikm.com/", {
    waitUntil: "networkidle2"
  });
  await page.setViewport({ width: 1680, height: 1050 });
  await page.pdf({
    path: "arifsiddikm.pdf",
    format: "A4",
    printBackground: true
  });

  await browser.close();
})();
