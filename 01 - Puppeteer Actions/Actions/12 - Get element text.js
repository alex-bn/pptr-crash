const puppeteer = require('puppeteer')

describe('My fist puppeteer test', () => {
	//
	it('should load the browser', async function () {
		const browser = await puppeteer.launch({
			headless: true,
			slowMo: 10,
			devtools: false,
		})
		const page = await browser.newPage()
		await page.goto('http://example.com/')

		// This method runs document.querySelector within the page and passes it as the first argument to pageFunction

		const text = await page.$eval('h1', element => element.textContent)
		console.log(`Text in the h1 element: ${text}`)

		await browser.close()
	})
})
