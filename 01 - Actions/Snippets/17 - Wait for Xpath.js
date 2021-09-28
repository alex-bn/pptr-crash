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
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)

		//
		await page.goto('http://zero.webappsecurity.com/index.html')

		// Wait for the selector to appear in page:
		await page.waitForSelector('#searchTerm')

		// Wait for the Xpath to appear in page:
		await page.waitForXPath('//*[@id="searchTerm"]')

		//
		await page.type('#searchTerm', 'Hello World', { delay: 100 })
		await browser.close()
	})
})
