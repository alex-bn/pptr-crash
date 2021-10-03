export default class BasePage {
	async wait(milisec) {
		await page.waitForTimeout(milisec)
	}

	async getTitle() {
		return await page.getTitle()
	}

	async getUrl() {
		return await page.getUrl()
	}
}
