// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const puppeteer = require("puppeteer");

// export default async function handler(req, res) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://www.twitch.tv/vivixstar/about");
//   const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
//   await sleep(5000);

//   const [el] = await page.$x(
//     `//*[@id="offline-channel-main-content"]/div[3]/div/div/div/div[2]/div/div/div[3]/div/div/div/div/p`
//   );

//   const src = await el.getProperty("textContent");
//   const srcTxt = src.jsonValue();
//   console.log(srcTxt);

//   // const txt = await el.getProperty("textContent");
//   // const raw = await txt.jsonValue();
//   // console.log(raw);
//   await browser.close();
//   // const src = await el.getPropoperties();
//   // const srcText = src.jsonValue();
//   // console.log(srcText);
//   // browser.close();

//   res.status(200).json({ name: "John Doe" });
// }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const puppeteer = require("puppeteer");

export default async function handler(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://twitter.com/vivixstar");
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(5000);

  const [el] = await page.$x(
    `//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/div/div/span[1]/span`
  );

  const src = await el.getProperty("textContent");
  const srcTxt = src.jsonValue();
  console.log(srcTxt);
  await browser.close();

  res.status(200).json({ comms: srcTxt });
}
