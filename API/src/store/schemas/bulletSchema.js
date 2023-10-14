const { Schema } = require('mongoose');

const bulletSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		amount: {
			type: Number,
			require: true,
		},
		reserved: {
			type: Number,
			default: 0,
		},
		available: {
			type: Number,
		},
		measurement: {
			type: String,
			require: true,
			default: 'Kg',
		},
		unitPrice: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

bulletSchema.set('versionKey', false);

bulletSchema.pre('save', function (next) {
	this.available = this.amount - this.reserved;

	next();
});

module.exports = bulletSchema;
