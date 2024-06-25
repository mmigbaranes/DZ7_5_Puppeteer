const { expect } = require("chai");
let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});
afterEach(() => {
  page.close();
});

describe("Happy path servise ИДЁМ В КИНО", () => {
  test("Test1 'displaying the cost of booked tickets the film Mickey Mouse'", async () => {
    await page.click(".movie-seances__time[href='#'][data-seance-id='199']");
    await page.waitFor(1000);
    await page.click('div:nth-child(5) span:nth-child(1)');
    await page.click('div:nth-child(5) span:nth-child(2)');
    await page.click('div:nth-child(6) span:nth-child(6)');
    await page.click('div:nth-child(10) span:nth-child(8)');
    await page.click(".acceptin-button");
    await page.waitFor(1000);
    const buttonText = 'body main p:nth-child(6)';
    const actual = await page.$eval(buttonText, link => link.textContent);
    expect(actual).equal('Стоимость: 2000 руб.');
  }, 25000);  
});
  test("Test2 'displaying the cost of booked tickets Gone with the Wind'", async () => {
    await page.click("a:nth-child(4)");
    await page.click(".movie-seances__time[href='#'][data-seance-id='190']");
    await page.waitFor(1000);
    await page.click('div:nth-child(7) span:nth-child(5)');
    await page.click('div:nth-child(5) span:nth-child(2)');
    await page.click('div:nth-child(8) span:nth-child(6)');
    await page.click('div:nth-child(4) span:nth-child(8)');
    await page.click(".acceptin-button");
    await page.waitFor(1000);
    const buttonText = '.acceptin-button';
    const actual = await page.$eval(buttonText, link => link.textContent);
    expect(actual).equal("Получить код бронирования");
  }, 25000);  

describe("Sad path servise ИДЁМ В КИНО", () => {
  test("Test 'No booking button selector'", async () => {
    await page.click(".movie-seances__time[href='#'][data-seance-id='199']");
    await page.waitFor(1000);
    await page.click('div:nth-child(5) span:nth-child(1)');
    await page.click('div:nth-child(5) span:nth-child(2)');
    await page.click('div:nth-child(5) span:nth-child(1)');
    await page.click('div:nth-child(5) span:nth-child(2)');
    await page.waitFor(1000);
    const buttonText = 'body main p:nth-child(6)';
    const actual = await page.$eval(buttonText, link => link.textContent);
    expect(actual).equal('Стоимость: 1000 руб.');
  }, 25000);  
});
