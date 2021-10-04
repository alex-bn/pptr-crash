const puppeteer = require('puppeteer')

;(async () => {
	// Incognito:
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 0,
		devtools: false,
		ignoreHTTPSErrors: true,
	})
	const context = await browser.createIncognitoBrowserContext()

	const page = await context.newPage()
	await page.goto('https://example.com')
	await page.waitForTimeout(5000)
	await browser.close()
})()
