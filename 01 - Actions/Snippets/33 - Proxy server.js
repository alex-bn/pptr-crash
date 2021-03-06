const puppeteer = require('puppeteer')
const {
	click,
	getText,
	getCount,
	waitForText,
	typeText,
	shouldNotExist,
} = require('../lib/helper')

describe('Proxy server', () => {
	let browser
	let page

	before(async function () {
		browser = await puppeteer.launch({
			headless: true,
			slowMo: 0,
			devtools: false,
			ignoreHTTPSErrors: true,
			args: ['--proxy-server=127.0.0.1:3030'],
		})
		page = await browser.newPage()
		await page.setDefaultNavigationTimeout(20000)
		await page.setDefaultTimeout(10000)
	})

	after(async function () {
		await browser.close()
	})

	it('Should send the request via proxy', async function () {
		// For this, you will need a working proxy and a destination URL to send the request to
		await page.goto('https://www.amazon.com')
	})
})
