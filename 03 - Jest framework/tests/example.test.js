import HomePage from '../pages/HomePage'
import TopBar from '../pages/components/TopBar'
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'

describe('Test example', () => {
	jest.setTimeout(15000)
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

	it('should load the home page', async () => {
		await homePage.visit()
	})

	it('navbar should be displayed', async () => {
		await homePage.isNavBarDisplayed()
		await topBar.isTopBarDisplayed()
	})

	it('should fail to login', async () => {
		await loginPage.visit()
		await loginPage.isLoginFormDisplayed()
		await loginPage.login('aa', 'aa')
		// await loginPage.wait(5000)
	})

	it('should check feedback form', async () => {
		await feedbackPage.visit()
		await feedbackPage.isFeedBackFormDisplayed()
		await feedbackPage.submitFeedback('name', 'a@a.com', 'subject', 'comment')
		// await feedbackPage.wait(5000)
	})
})
