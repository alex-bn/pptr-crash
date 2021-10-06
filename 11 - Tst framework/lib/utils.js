module.exports = {
	generateID: function (length) {
		let result = ''
		let characters = 'abcdefghijklmnopqrstuvwxyz1234567890'
		let charactersLength = characters.length

		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength))
		}
		return result
	},

	generateEmail: function () {
		let values = 'abcdefghijklmnopqrstuvwxyz1234567890'
		let email = ''
		let temp
		for (i = 0; i < 10; i++) {
			temp = values.charAt(Math.round(values.length * Math.random()))
			email += temp
		}
		temp = ''
		email += '@'
		for (i = 0; i < 3; i++) {
			temp = values.charAt(Math.round(values.length * Math.random()))
			email += temp
		}
		email += '.com'
		return email
	},

	generateNumbers: function () {
		let numbers = Math.floor(Math.random() * 9000000000) + 100000000
		return numbers.toString()
	},
}
