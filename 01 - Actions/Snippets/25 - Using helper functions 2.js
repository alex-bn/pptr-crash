const puppeteer = require('puppeteer')
const { click, getText, getCount } = require('./22 - Helper functions 1')
const {
	waitForText,
	typeText,
	shouldNotExist,
} = require('./24 - Helper functions 2')

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
		await page.goto('http://www.uitestingplayground.com/')

		const text = await getText(page, '.mb-0')
		const count = await getCount(page, 'h3')
		console.log(`Text is: ${text}`)
		console.log(`Number of h3 element is: ${count}`)

		await click(
			page,
			'div.row:nth-child(2) > div:nth-child(4) > h3:nth-child(1) > a:nth-child(1)'
		)
		await shouldNotExist(page, '.img-fluid')
		await typeText(page, '#newButtonName', text)
		await click(page, '#updatingButton')
		await page.goBack()

		await page.waitForTimeout(2000)

		// await waitForText(page, '#title', 'Test') // not working
	})
})
