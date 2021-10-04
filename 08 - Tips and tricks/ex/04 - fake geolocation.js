const puppeteer = require('puppeteer')

;(async () => {
	// Fake geolocation
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 0,
		devtools: false,
		ignoreHTTPSErrors: true,
	})
	const page = await browser.newPage()

	// Grant permission for geolocation:
	const context = browser.defaultBrowserContext()
	await context.overridePermissions(
		'https://geotargetly.com/my-ip-geolocation',
		['geolocation']
	)

	// Set the location
	await page.setGeolocation({ latitude: 90, longitude: 0 })

	// Open URL
	await page.goto('https://geotargetly.com/my-ip-geolocation')

	// CLose test
	// await browser.close()
})()
