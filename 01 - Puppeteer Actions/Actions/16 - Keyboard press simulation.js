const puppeteer = require('puppeteer')

describe('My fist puppeteer test', () => {
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
		await page.waitForSelector('#searchTerm')
		await page.type('#searchTerm', 'Hello World', { delay: 100 })

		// Keyboard press:

		await page.keyboard.press('Enter', { delay: 100 })
		await page.waitForTimeout(5000)

		await browser.close()
	})
})
