const puppeteer = require('puppeteer')

;(async () => {
	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 0,
		devtools: false,
		ignoreHTTPSErrors: true,
	})
	const page = await browser.newPage()

	await page.goto('https://example.com', { waitUntil: 'networkidle0' })
	await page.screenshot({ path: 'example.png', fullPage: true })
	await browser.close()
})()
