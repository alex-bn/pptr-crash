const puppeteer = require('puppeteer')

describe('Device Emulation', () => {
	//
	let browser
	let page

	//
	before('before hook description', async function () {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 10,
			devtools: false,
		})

		// Spin up a new context in incognito mode
		const context = await browser.createIncognitoBrowserContext() // step 1
		page = await context.newPage() // step 2

		await page.setDefaultNavigationTimeout(20000)
		await page.setDefaultTimeout(10000)
	})

	after('after hook description', async function () {
		await browser.close()
	})

	it('Desktop Device Test', async function () {
		//TODO
		await page.goto('https://example.com/')
	})
})
