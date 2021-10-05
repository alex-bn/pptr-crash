import HomePage from '../pages/HomePage'
import TopBar from '../pages/components/TopBar'
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'
import { USERNAME, PASSWORD, TIMEOUT } from '../config'

describe('End-to-end test 1', () => {
	jest.setTimeout(TIMEOUT)
	let homePage
	let topBar
	let loginPage
	let feedbackPage

	beforeAll(async () => {
		homePage = new HomePage()
		topBar = new TopBar()
		loginPage = new LoginPage()
		feedbackPage = new FeedbackPage()
	})

	it('should load the homepage', async () => {
		await homePage.visit()
		await homePage.isNavBarDisplayed()
	})

	it('should submit feedback', async () => {
		await homePage.clickFeedbackLink()
		await feedbackPage.isFeedBackFormDisplayed()
		await feedbackPage.submitFeedback('name', 'a@a.com', 'submit', 'comment')
	})

	it('should login to application', async () => {
		await homePage.visit()
		await topBar.isTopBarDisplayed()
		await topBar.clickSignInButton()
		await loginPage.isLoginFormDisplayed()
		await loginPage.login(USERNAME, PASSWORD)
		await loginPage.wait(1000)
	})
})
