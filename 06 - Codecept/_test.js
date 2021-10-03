const assert = require('assert')

Feature('Sample feature')

Scenario('first test', ({ I }) => {
	I.amOnPage('https://example.com')
	I.wait(1)
	I.saveScreenshot('test.png', true)
})

Scenario('second test', ({ I }) => {
	I.amOnPage('http://zero.webappsecurity.com/index.html')
	I.wait(2)
})

Scenario('third test', async ({ I }) => {
	I.amOnPage('https://example.com/')
	const text = await I.grabTextFrom('h1')
	I.wait(3)
	assert.strictEqual(text, 'Example Domain', 'Text not found.')
})

Scenario('fourth test', ({ I }) => {
	I.amOnPage('https://example.com')
	I.see('Example')
	I.dontSee('Automation')
	I.seeElement('h1')
	I.dontSeeElement('.video-player')
	I.wait(1)
})
