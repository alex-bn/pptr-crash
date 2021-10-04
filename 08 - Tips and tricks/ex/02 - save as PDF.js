const puppeteer = require('puppeteer')

;(async () => {
	// convert page into pDF file
	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 0,
		devtools: false,
		ignoreHTTPSErrors: true,
	})
	const page = await browser.newPage()

	await page.goto('https:example.com', { waitUntil: 'networkidle0' })
	await page.pdf({ path: 'example.pdf', format: 'a4' })
	await browser.close()
})()
