const puppeteer = require('puppeteer')
const {
	click,
	getText,
	getCount,
	waitForText,
	typeText,
	shouldNotExist,
} = require('../lib/helper')

describe('Scrap links', () => {
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
		await page.setDefaultNavigationTimeout(20000)
		await page.setDefaultTimeout(10000)
	})

	after(async function () {
		await browser.close()
	})

	it('Scrap links from a website', async function () {
		//
		await page.setExtraHTTPHeaders({ Referer: 'https://sparktoro.com/' })
		await page.goto('https://sparktoro.com/trending')
		await page.waitForSelector('div.title > a')

		const links = await page.evaluate(() => {
			const l = Array.from(document.querySelectorAll('div.title > a'))
			return l.map(link => link.href)
		})

		console.log(links)
	})
})
