const puppeteer = require('puppeteer')
const { expect } = require('chai')
const {
	click,
	getText,
	getCount,
	waitForText,
	typeText,
	shouldNotExist,
} = require('../lib/helper')

describe('Login Test', () => {
	let browser
	let page

	before(async function () {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 0,
			devtools: false,
			ignoreHTTPSErrors: true,
		})
		page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)
	})

	after(async function () {
		await browser.close()
	})

	it('Display feedback form', async function () {
		// todo
		await page.goto('http://zero.webappsecurity.com/index.html')
		await click(page, '#feedback')
	})

	it('Submit feedback form', async function () {
		// todo
		await typeText(page, '#name', 'YourName')
		await typeText(page, '#email', 'email@email.com')
		await typeText(page, '#subject', 'Subject Form')
		await typeText(page, '#comment', 'Message text lorem ')
		await click(page, 'input[type="submit"]')
	})
	it('Display results page', async function () {
		// todo
		await page.waitForSelector('#feedback-title')
		const url = await page.url()
		expect(url).to.include('sendFeedback.html')
	})
})
