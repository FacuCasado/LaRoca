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
		unique: true,
		require: true,
	},
	address: String,
	cuit: {
		type: String,
		require: true,
	},
	rol: {
		type: String,
		enum: ['owner', 'user', 'employee', 'dev'],
		default: 'user',
	},
});
userSchema.set('versionKey', false);
module.exports = userSchema;
