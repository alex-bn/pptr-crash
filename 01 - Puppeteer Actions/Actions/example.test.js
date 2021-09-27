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
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)

		//
		await page.goto('http://zero.webappsecurity.com/index.html')
		await page.waitForSelector('#signin_button')

		await page.click('#signin_button')

		// To check that the button no longer exists there are 2 options:

		// a)
		await page.waitForTimeout(() => !document.querySelector('#signin_button'))

		// b)
		await page.waitForSelector('#signin_button', {
			hidden: true,
			timeout: 3000, // has the highest precedence
		})
		await browser.close()
	})
})