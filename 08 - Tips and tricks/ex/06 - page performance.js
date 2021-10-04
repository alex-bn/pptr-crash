const puppeteer = require('puppeteer')

;(async () => {
	// Measure page performance
	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 0,
		devtools: false,
		ignoreHTTPSErrors: true,
	})
	const page = await browser.newPage()

	await page.goto('https://pptr.dev')
	await page.waitForSelector('title')

	// Execute Navigation API within the page context
	const metrics = await page.evaluate(() => JSON.stringify(window.performance))
	console.log(JSON.parse(metrics))

	await browser.close()
})()
