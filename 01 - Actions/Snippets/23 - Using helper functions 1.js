const puppeteer = require('puppeteer')
const { click, getText, getCount } = require('./22 - Helper functions 1')

describe('Puppeteer tests', () => {
	let browser
	let page

	before('some description', async function () {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 10,
			devtools: false,
		})
		page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)
	})

	after('some description', async function () {
		await browser.close()
	})

	it('should use the helper functions', async function () {
		await page.goto('http://example.com/')
		const text = await getText(page, 'h1')
		const count = await getCount(page, 'p')

		console.log(`Text from h1 element is: ${text}`)
		console.log(`Number of p element is: ${count}`)

		await page.goto('http://zero.webappsecurity.com/index.html')
		await click(page, '#signin_button')
		await page.waitForSelector('#signin_button', {
			hidden: true,
			timeout: 3000,
		})
		const h3 = await getText(page, 'h3')
		console.log(`Landed on a page with an h3 element that contains: ${h3}`)
	})
})
