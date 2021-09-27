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
		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.type('#developer-name', 'Puppeteer Alex', { delay: 100 })
		await page.select('#preferred-interface', 'JavaScript API')
		await page.click('#tried-test-cafe', { clickCount: 1 })
		await page.click('#windows', { clickCount: 1 })
		await page.click('#reusing-js-code', { clickCount: 1 })
		const message =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		await page.type('#comments', message)

		await page.click('#submit-button')

		await page.waitForSelector('#article-header')
		await page.waitForTimeout(10000)
		await browser.close()
	})
})
