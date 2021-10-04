const puppeteer = require('puppeteer')
const iPhoneX = puppeteer.devices['iPhone X']

;(async () => {
	// Emulating devices
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 0,
		devtools: false,
		ignoreHTTPSErrors: true,
	})
	const page = await browser.newPage()

	await page.emulate(iPhoneX)
	await page.goto('https://pptr.dev/')
	await page.waitForTimeout(5000)
	await browser.close()
})()
