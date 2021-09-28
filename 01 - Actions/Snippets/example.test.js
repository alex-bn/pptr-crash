const puppeteer = require('puppeteer')
const {
	click,
	getText,
	getCount,
	waitForText,
	typeText,
	shouldNotExist,
} = require('../lib/helper')

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
		await click(
			page,
			'div.row:nth-child(2) > div:nth-child(3) > h3:nth-child(1) > a:nth-child(1)'
		)
	})
})
