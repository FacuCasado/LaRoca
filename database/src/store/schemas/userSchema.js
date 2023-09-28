const { Schema } = require('mongoose');

const userSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
	fantasyName: String,
	telephone: String,
	email: {
		type: String,
		require: true,
	},
	address: String,
	cuit: {
		type: String,
		require: true,
	},
	rol: {
		type: String,
		enum: ['owner', 'user', 'employee'],
		default: 'user',
	},
});

module.exports = userSchema;
