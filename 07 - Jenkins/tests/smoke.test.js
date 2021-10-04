const puppeteer = require('puppeteer')

describe('Smoke test sample', () => {
	it('should load webpage', async () => {
		const browser = await puppeteer.launch({ headless: true })
		const page = await browser.newPage()
		await page.setDefaultTimeout(10000)

		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.waitForSelector('#main-form')
		await browser.close()
	})
})
