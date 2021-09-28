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

		// pause the test / implicit wait
		await page.waitForTimeout(3000)

		await page.waitForSelector('h1')
		await browser.close()
	})
})
