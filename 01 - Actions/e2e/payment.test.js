const puppeteer = require('puppeteer')
const { expect } = require('chai')
const {
	click,
	getText,
	getCount,
	waitForText,
	typeText,
	shouldNotExist,
} = require('../lib/helper')

describe('Payment Test', () => {
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

		// Login action can be done in the login hook
		await page.goto('http://zero.webappsecurity.com/index.html')
		await click(page, '#signin_button')
		await page.waitForSelector('#login_form')
		await typeText(page, '#user_login', 'username')
		await typeText(page, '#user_password', 'password')
		await click(page, '#user_remember_me')
		await click(page, 'input[type="submit"]')
	})

	after(async function () {
		await browser.close()
	})

	it('Display Payment Form', async function () {
		// todo
		await page.waitForSelector('.nav-tabs')
		await click(page, '#pay_bills_tab')
		await page.waitForSelector('.board')
	})

	it('Make Payment', async function () {
		// todo
		await page.select('#sp_payee', 'Wells Fargo')
		await page.select('#sp_account', 'Credit Card')
		await typeText(page, '#sp_amount', '500')
		await typeText(page, '#sp_date', '2021-09-03')
		await page.keyboard.press('Enter')
		await typeText(page, '#sp_description', 'test payment')
		await click(page, '#pay_saved_payees')
		await page.waitForSelector('#alert_content')
	})
})
