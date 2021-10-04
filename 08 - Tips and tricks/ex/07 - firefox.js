const puppeteer = require('puppeteer-core')

;(async () => {
	// Using firefox
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 0,
		devtools: false,
		ignoreHTTPSErrors: true,
		product: 'firefox',
		args: ['-wait-for-browser'],
		executablePath: 'C:/Program Files/Mozilla Firefox/firefox.exe',
	})
	const page = await browser.newPage()
	await page.goto('https://example.com')
	await page.waitForTimeout(5000)
	await browser.close()
})()
