import puppeteer from 'puppeteer'
import { step } from 'mocha-steps'

describe('dummy test', () => {
	let browser
	let page

	before(async () => {
		browser = await puppeteer.launch({ headless: false })
		page = await browser.newPage()
		await page.setDefaultTimeout(7000)
	})

	after(async () => {
		await browser.close()
	})

	step('Step 1: should load a random URL', async () => {
		await console.log('Fetching URL...')
		await page.goto('https://example.com')
		// await console.log('Waiting 2 seconds')
		// await page.waitForTimeout(2000)
		await console.log('Test done!')
	})

	step('Step 2: should perform a random action and fail..'),
		async () => {
			await page.waitForSelector('#FAIL')
		}

	step('Step 3: should look for an element on the page that actually exists'),
		async () => {
			await page.waitForSelector('h1')
		}
})
