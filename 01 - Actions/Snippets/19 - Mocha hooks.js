const puppeteer = require('puppeteer')

describe('Puppeteer test', () => {
	let browser
	let page

	before('some description', async function () {
		// use to set up your browser
		// runs once before the first test in this block
		browser = await puppeteer.launch({
			headless: true,
			slowMo: 10,
			devtools: false,
		})
		page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)
	})

	after('some description', async function () {
		// runs once after the last test in this block
		await browser.close()
	})

	beforeEach('some description', async function () {
		// runs before each test in this block (it block)
	})

	afterEach('some description', async function () {
		// runs after each test in this block(it block)
	})

	it('should load the browser', async function () {
		await page.goto('http://example.com/', { waitUntil: ['networkidle2'] })
	})
})
