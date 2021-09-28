// usually in a separate folder at the root of the project under the name of 'lib'

module.exports = {
	// Part 1
	click: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			await page.click(selector)
		} catch (error) {
			throw new Error(`Could not click on selector: ${selector}.`)
		}
	},

	getText: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			return await page.$eval(selector, element => element.innerHTML)
		} catch (error) {
			throw new Error(`Cannot get text from selector: ${selector}.`)
		}
	},

	getCount: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			return page.$$eval(selector, elArr => elArr.length)
		} catch (error) {
			throw new Error(`Cannot get count of selector: ${selector}.`)
		}
	},
}
