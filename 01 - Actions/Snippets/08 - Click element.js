const puppeteer = require('puppeteer')

describe('Puppeteer test', () => {
	//
	it('should load the browser', async function () {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 10,
			devtools: false,
		})
		// Tab 1:
		const page = await browser.newPage()
		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.type('#developer-name', 'Puppeteer Test', { delay: 100 })

		// page.click(): fetches an element with selector, scrolls it into view if needed, and then uses page.mouse to click in the center of the element. If there's no element matching selector, the method throws an error

		await page.click('#tried-test-cafe', { clickCount: 1 })
		// await page.click('#populate', { clickCount: 1 })
		await page.waitForTimeout(2000)

		await browser.close()
	})
})
