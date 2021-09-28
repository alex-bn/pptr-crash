module.exports = {
	// Part 2
	typeText: async function (page, selector, text) {
		try {
			await page.waitForSelector(selector)
			await page.type(selector, text)
		} catch (error) {
			throw new Error(`Could not type into selector: ${selector}.`)
		}
	},

	waitForText: async function (page, selector, text) {
		try {
			await page.waitForSelector(selector)
			await page.waitForFunction(function (selector, text) {
				document.querySelector(selector).innerText.includes(text),
					{},
					selector,
					text
			})
		} catch (error) {
			throw new Error(`Text: ${text} not found for selector: ${selector}.`)
		}
	},

	shouldNotExist: async function (page, selector) {
		try {
			await page.waitForSelector(selector, { hidden: true })
		} catch (error) {
			throw new Error(`Selector: ${selector} should not be visible.`)
		}
	},
}
