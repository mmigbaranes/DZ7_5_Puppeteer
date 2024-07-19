const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru/client/index.php${string}`, {
    setTimeout: 20000,
  });
});

When("user selects a film in the cinema hall", async function () {
  await this.page.click(".movie-seances__time[href='#'][data-seance-id='199']");
});

Then("user sees the price of tickets {string}", async function (string) {
  const actual = await getText(this.page, "body main p:nth-child(6)");
  const expected = await string;
  expect(actual).contains(expected);
});
