const puppeteer = require("puppeteer");

export default async function handler(req, res) {
  async function getData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://twitter.com/vivixstar", {
      waitUntil: "networkidle0",
    });
    const title = await page.title();

    // const [el] = await page.$x(
    //   `//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/div/div/span[1]/span`
    // );

    // const src = await el.getProperty("textContent");
    // const srcTxt = src.jsonValue();
    await browser.close();
    // return srcTxt;
    return title;
  }

  const data = await getData();

  res.status(200).json({ data });
}
