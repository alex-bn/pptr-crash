const puppeteer = require('puppeteer')

describe('My fist puppeteer test', () => {
	//
	it('should load the browser', async function () {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 250,
			devtools: false,
		})
		// Tab 1:
		const page1 = await browser.newPage()
		// Tab 2:
		const page2 = await browser.newPage()

		await page1.goto('http://example.com/')
		await page1.waitForSelector('h1')

		await page2.goto('http://www.uitestingplayground.com/')
		await page2.waitForSelector('#description')

		// Brings page to front (activates tab)

		await page1.bringToFront()
		await page1.waitForTimeout(1000)

		await page2.bringToFront()
		await page2.waitForTimeout(1000)

		await page1.bringToFront()
		await page1.waitForTimeout(1000)

		await browser.close()
	})
})
