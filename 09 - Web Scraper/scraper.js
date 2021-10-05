/**
 * Web scraper
 */

const puppeteer = require('puppeteer')
const random_useragent = require('random-useragent')
const fs = require('fs')
const { url } = require('./config')

;(async () => {
	// Open browser:
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()

	// Setup
	await page.setDefaultTimeout(10000)
	await page.setViewport({ width: 1200, height: 800 })

	// Mimic different user agent
	await page.setUserAgent(random_useragent.getRandom())

	// Get data from bookstore
	const name_selector = '.product_main > h1'
	const price_selector = '.price_color'

	await page.goto(url)
	await page.waitForSelector(name_selector)
	await page.waitForSelector(price_selector)

	const name = await page.$eval(name_selector, e => e.innerHTML)
	const price = await page.$eval(price_selector, e => e.innerHTML)
	const nameTrim = name.trim()
	const priceTrim = price.trim()

	// console.log(nameTrim, priceTrim)

	// Get current date and time
	const date = new Date()
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()

	const fullDate = `${day}/${month}/${year}`
	// console.log(`${fullDate} ${nameTrim} ${priceTrim}`)

	// Store data
	const logger = fs.createWriteStream('log.txt', { flags: 'a' })
	logger.write(`${fullDate} - ${nameTrim} - ${priceTrim}\n`)
	logger.close()

	// Close browser
	await browser.close()
})().catch(error => {
	console.log(error)
	process.exit(1)
})
