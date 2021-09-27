const puppeteer = require('puppeteer')

describe('My fist puppeteer test', () => {
	//
	it('should load the browser', async function () {
		const browser = await puppeteer.launch({
			headless: true,
			slowMo: 250,
			devtools: false,
		})
		// Test will pass only in headless mode !

		const page = await browser.newPage()
		await page.goto('http://example.com/')
		await page.waitForSelector('h1')
		await page.goto('https://dev.to')
		await page.waitForSelector('.crayons-header--search-input')
		await page.goBack()
		await page.waitForSelector('h1')
		await page.goForward()
		await page.waitForSelector('.crayons-header--search-input')
		await browser.close()

		// await page.goto('http://example.com/')
		// await page.waitForSelector('h1')
		// await page.goto('http://www.uitestingplayground.com/')
		// await page.waitForSelector('#description')
		// await page.goBack()
		// await page.waitForSelector('h1')
		// await page.goForward()
		// await page.waitForSelector('#description')
		// await browser.close()
	})
})
