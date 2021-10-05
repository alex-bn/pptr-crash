'use strict';

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _mochaSteps = require('mocha-steps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('dummy test', function () {
	var browser = void 0;
	var page = void 0;

	before(async function () {
		browser = await _puppeteer2.default.launch({ headless: false });
		page = await browser.newPage();
		await page.setDefaultTimeout(7000);
	});

	after(async function () {
		await browser.close();
	});

	(0, _mochaSteps.step)('Step 1: should load a random URL', async function () {
		await console.log('Fetching URL...');
		await page.goto('https://example.com');
		// await console.log('Waiting 2 seconds')
		// await page.waitForTimeout(2000)
		await console.log('Test done!');
	});

	(0, _mochaSteps.step)('Step 2: should perform a random action and fail..'), async function () {
		await page.waitForSelector('#FAIL');
	};

	(0, _mochaSteps.step)('Step 3: should look for an element on the page that actually exists'), async function () {
		await page.waitForSelector('h1');
	};
});