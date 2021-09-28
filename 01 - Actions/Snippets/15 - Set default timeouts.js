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

		// Override the it.block timeout value:
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)

		//

		await page.goto('http://example.com/')
		await browser.close()
	})
})
