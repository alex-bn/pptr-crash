import { step } from 'mocha-steps'
import { expect } from 'chai'

import Page from '../builder'
import LoginPage from '../pages/LoginPage'

describe('Mocha steps demo', () => {
	let page
	let loginPage
	// let mobile

	before(async () => {
		page = await Page.build('Desktop')
		loginPage = await new LoginPage(page)
		// mobile = await Page.build('Mobile')
	})

	after(async () => {
		await page.close()
		// await mobile.close()
	})

	step('should load and check elements', async () => {
		await page.goto('http://zero.webappsecurity.com/index.html')
		const homeLink = await page.isElementVisible('#homeMenu')
		const bankingLink = await page.isElementVisible('#onlineBankingMenu')
		const feedbackLink = await page.isElementVisible('#feedback')
		;[homeLink, bankingLink, feedbackLink].forEach(element => {
			expect(element).to.be.true
		})
	})

	step('should display login form', async () => {
		await page.waitAndClick('#signin_button')
		expect(await page.isElementVisible('#login_form')).to.be.true
		expect(await page.isElementVisible('#signin_button')).to.be.false
	})

	// step('should login to application', async () => {
	// 	await page.waitAndType('#user_login', 'username')
	// 	await page.waitAndType('#user_password', 'password')
	// 	await page.waitAndClick('.btn-primary')
	// 	const navBar = await page.isElementVisible('.nav-tabs')
	// 	expect(navBar).to.be.true
	// })

	step('should login using the page object class', async () => {
		await loginPage.login('username', 'password')
		expect(await page.isElementVisible('.nav-tabs')).to.be.true
	})

	step('should check for 6 navbar links', async () => {
		expect(await page.getCount('.nav-tabs li')).to.equal(6)
	})
})
