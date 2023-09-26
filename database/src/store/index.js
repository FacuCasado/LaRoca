const mongoose = require('mongoose');

module.exports = {
	Bullet: mongoose.model('Bullet', require('./schemas/bulletSchema')),
	Raw: mongoose.model('Raw', require('./schemas/rawSchema')),
	Sales: mongoose.model('Sales', require('./schemas/salesSchema')),
	User: mongoose.model('User', require('./schemas/userSchema')),
};
