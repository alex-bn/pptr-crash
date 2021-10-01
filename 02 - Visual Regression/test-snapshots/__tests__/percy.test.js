const puppeteer = require('puppeteer')
const percySnapshot = require('@percy/puppeteer')

describe('Percy visual test', () => {
	let browser
	let page

	beforeAll(async function () {
		browser = await puppeteer.launch({ headless: true })
		page = await browser.newPage()
	})

	afterAll(async function () {
		await browser.close()
	})

	test('Full page percy snapshot', async () => {
		await page.goto('https://example.com')
		// await page.evaluate(() => {
		// 	;(document.querySelectorAll('h1') || []).forEach(el => el.remove())
		// })
		await page.waitForTimeout(1000)
		await percySnapshot(page, 'Example page')
	})
})

// set the key like this:
//  $env: PERCY_TOKEN = '5f0ffa908129d666d10248e65fe804d0a10f6aef066f0afaf69b63394f99d3e0'
