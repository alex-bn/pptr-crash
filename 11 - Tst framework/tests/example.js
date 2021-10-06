const puppeteer = require('puppeteer')
const { expect } = require('chai')

const config = require('../lib/config')
const helper = require('../lib/helpers')
const utils = require('../lib/utils')
const { shouldExist, waitForText } = require('../lib/helpers')

describe('Sample test description', () => {
	let browser
	let page

	before(async function () {
		browser = await puppeteer.launch({
			headless: config.isHeadless,
			slowMo: config.slowMo,
			devtools: config.isDevTools,
			timeout: config.launchTimeout,
		})
		page = await browser.newPage()
		await page.setDefaultTimeout(config.waitingTimeout)
		await page.setViewport({
			width: config.viewportWidth,
			height: config.viewportHeight,
		})
	})

	after(async function () {
		await browser.close()
	})

	const LOGIN_FORM = '#login_form'

	describe('Login test', () => {
		it('should navigate to homepage', async () => {
			await helper.loadUrl(page, config.baseUrl)
			await helper.shouldExist(page, '#online_banking_features')
		})

		it('should click on signin button', async () => {
			await helper.click(page, '#signin_button')
			await helper.shouldExist(page, '#login_form')
		})

		it('should submit login form with incorrect credentials', async () => {
			await helper.typeText(page, utils.generateID(9), '#user_login')
			await helper.typeText(page, utils.generateID(9), '#user_password')
			await helper.click(page, '.btn-primary')
			await helper.waitForText(page, 'body', 'Login and/or password are wrong')
			await helper.shouldExist(page, LOGIN_FORM)
		})
	})

	describe('Search test', () => {
		it('should navigate to homepage', async () => {
			await helper.loadUrl(page, config.baseUrl)
			await helper.shouldExist(page, '#online_banking_features')
		})

		it('should submit search phrase', async () => {
			await helper.typeText(page, 'Hello world', '#searchTerm')
			await helper.pressKey(page, 'Enter')
		})

		it('should display search results', async () => {
			await helper.waitForText(page, 'h2', 'Search Results')
			await helper.waitForText(
				page,
				'body',
				'No results were found for the query: Hello world'
			)
		})
	})

	describe('Navbar link count', () => {
		it('should navigate to homepage', async () => {
			await helper.loadUrl(page, config.baseUrl)
			await helper.shouldExist(page, '#online_banking_features')
		})

		it('should have the right number of URLs', async () => {
			const links = await helper.getCount(page, '#pages-nav > li')
			expect(links).to.equal(3)
		})
	})

	describe('Feedback form test', () => {
		it('should navigate to homepage', async () => {
			await helper.loadUrl(page, config.baseUrl)
			await helper.shouldExist(page, '#online_banking_features')
		})

		it('should click on feedback URL', async () => {
			await helper.click(page, '#feedback')
			await helper.shouldExist(page, 'form')
		})

		it('should submit feedback form', async () => {
			await helper.typeText(page, 'Name', '#name')
			await helper.typeText(page, utils.generateEmail(10), '#email')
			await helper.typeText(page, 'Just Suubject', '#subject')
			await helper.typeText(page, utils.generateNumbers(100), '#comment')
			await helper.click(page, 'input[type="submit"]')
		})

		it('should display success message', async () => {
			await shouldExist(page, '#feedback-title')
			await waitForText(page, 'body', 'Thank you for your comments')
		})
	})

	describe('Forgotten passwd', () => {
		it('should navigate to homepage', async () => {
			await helper.loadUrl(page, config.baseUrl)
			await helper.shouldExist(page, '#online_banking_features')
		})

		it('should load forgotten passwd form', async () => {
			await helper.loadUrl(
				page,
				'http://zero.webappsecurity.com/forgot-password.html'
			)
			await helper.waitForText(page, 'h3', 'Forgotten Password')
		})

		it('should submit email', async () => {
			await helper.typeText(page, utils.generateEmail(9), '#user_email')
			await helper.click(page, '.btn-primary')
		})

		it('should display success message', async () => {
			await helper.waitForText(
				page,
				'body',
				'Your password will be sent to the following email:'
			)
		})
	})
})
Kinda
