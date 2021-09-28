const puppeteer = require('puppeteer')

describe('Puppeteer test', () => {
	//
	it('should load the browser', async function () {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 10,
			devtools: false,
		})
		const page = await browser.newPage()
		await page.goto('http://example.com/')
		await page.waitForTimeout(3000)
		await page.waitForSelector('h1')

		// Reload the page, wait 3s and check that the selector is still there:
		await page.reload()

		await page.waitForTimeout(3000)
		await page.waitForSelector('h1')

		await browser.close()
	})
})
