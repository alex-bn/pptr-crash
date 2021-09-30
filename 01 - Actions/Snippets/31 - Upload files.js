const puppeteer = require('puppeteer')
const {
	click,
	getText,
	getCount,
	waitForText,
	typeText,
	shouldNotExist,
} = require('../lib/helper')

describe('Upload Test', () => {
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

	it('Should load a file from disk', async function () {
		//
		await page.goto('https://chercher.tech/practice/popups#')
		const [fileChooser] = await Promise.all([
			page.waitForFileChooser(),
			click(page, 'input[type="file"]'),
		])

		// true if the field accepts multiple files, otherwise false
		const isMultiple = await fileChooser.isMultiple()

		// can upload MULTIPLE files when allowed
		if (!isMultiple) {
			await fileChooser.accept([
				'D:/cursuri/cursuri udemy/PPTR/01 - Actions/file/A.pdf',
			])
		} else {
			await fileChooser.accept([
				'D:/cursuri/cursuri udemy/PPTR/01 - Actions/file/A.pdf',
				'D:/cursuri/cursuri udemy/PPTR/01 - Actions/file/B.pdf',
			])
		}

		// can upload only ONE file
		// elementHandle.uploadFile(...filePaths)
		const up = await page.$('input[type="file"]')
		await up.uploadFile('D:/cursuri/cursuri udemy/PPTR/01 - Actions/file/B.pdf')
	})
})
