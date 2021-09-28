const puppeteer = require('puppeteer')

describe('Puppeteer test', () => {
	//
	it('should load the browser', async function () {
		const browser = await puppeteer.launch({
			headless: true,
			slowMo: 10,
			devtools: false,
		})
		const page = await browser.newPage()
		await page.goto('http://example.com/')

		// Shortcut for page.mainFrame().title()
		const title = await page.title()

		// This is a shortcut for page.mainFrame().url()
		const url = await page.url()

		console.log(`Title: ${title}`)
		console.log(`URL: ${url}`)

		await browser.close()
	})
})
