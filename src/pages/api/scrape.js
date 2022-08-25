const puppeteer = require("puppeteer");

export default async function handler(req, res) {
  async function getData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://twitter.com/vivixstar", {
      waitUntil: "networkidle0",
    });
    const title = await page.title();
    await browser.close();
    return title;
  }

  const data = await getData();

  res.status(200).json({ data });
}
