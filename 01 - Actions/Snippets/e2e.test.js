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

describe('Currency Exchange', () => {
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

	it('Display Exchange Form', async function () {
		// todo
		await page.waitForSelector('.nav-tabs')
		await click(page, '#pay_bills_tab')
		await click(page, 'li.ui-state-default:nth-child(3) > a:nth-child(1)')
		await page.waitForSelector('.board')
	})

	it('Exchange Currency', async function () {
		// todo
		await page.select('#pc_currency', 'JPY')
		await typeText(page, '#pc_amount', '1000')
		await click(page, '#pc_inDollars_false')
		await click(page, '#purchase_cash')
		await page.waitForSelector('#alert_content')
	})
})
