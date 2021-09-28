// add script:

//

const puppeteer = require('puppeteer')
const {
	click,
	getText,
	getCount,
	waitForText,
	typeText,
	shouldNotExist,
} = require('../lib/helper')

describe('Login Test', () => {
	let browser
	let page

	before(async function () {
		browser = await puppeteer.launch({
			headless: true,
			slowMo: 0,
			devtools: false,
			ignoreHTTPSErrors: true,
		})
		page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)
	})

	after(async function () {
		await browser.close()
	})

	it('Login test - Invalid credentials', async function () {
		// todo
		await page.goto('http://zero.webappsecurity.com/index.html')
		await click(page, '#signin_button')
		await page.waitForSelector('#login_form')
		await typeText(page, '#user_login', 'invalid')
		await typeText(page, '#user_password', 'invalid')
		await click(page, '#user_remember_me')
		await click(page, 'input[type="submit"]')
		await page.waitForSelector('.alert-error')
	})

	it('Login test - Valid credentials', async function () {
		// todo
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
