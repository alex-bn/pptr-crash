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

		const context = await browser.createIncognitoBrowserContext()
		page = await context.newPage()

		await page.setDefaultNavigationTimeout(20000)
		await page.setDefaultTimeout(10000)
	})

	after('after hook description', async function () {
		await browser.close()
	})

	it('Desktop Device Test', async function () {
		//TODO
		await page.setViewport({ width: 1650, height: 1050 })
		await page.goto('https://example.com/')
		await page.waitForTimeout(5000)
	})

	it('Tablet Device Test', async function () {
		//TODO
		const tablet = puppeteer.devices['iPad landscape']
		await page.emulate(tablet)
		await page.goto('https://example.com/')
		await page.waitForTimeout(5000)
	})

	it('Mobile Device Test', async function () {
		//TODO
		const mobile = puppeteer.devices['iPhone X']
		await page.emulate(mobile)
		await page.goto('https://example.com/')
		await page.waitForTimeout(5000)
	})
})
