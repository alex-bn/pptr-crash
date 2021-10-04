const puppeteer = require('puppeteer')

;(async () => {
	// Accessibility test
	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 0,
		devtools: false,
		ignoreHTTPSErrors: true,
	})
	const page = await browser.newPage()

	await page.goto('https://pptr.dev')
	await page.waitForSelector('title')

	const snapshot = await page.accessibility.snapshot()
	console.log(snapshot)

	await browser.close()
})()
