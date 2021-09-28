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
			ignoreHTTPSErrors: true,
		})
		page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)
	})

	after('some description', async function () {
		await browser.close()
	})

	it('should use the helper functions', async function () {
		await page.goto('http://zero.webappsecurity.com/index.html')
		await click(page, '#signin_button')
		await page.waitForSelector('#login_form')
		await typeText(page, '#user_login', 'username')
		await typeText(page, '#user_password', 'password')
		await click(page, '#user_remember_me')
		await click(page, 'input[type="submit"]')
		await page.waitForSelector('#settingsBox')
	})
})
