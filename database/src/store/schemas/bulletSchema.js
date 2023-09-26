const { Schema } = require('mongoose');

const bulletSchema = new Schema(
	{
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

bulletSchema.pre('save', (next) => {
	this.available = this.amount - this.reserved;

	next();
});

module.exports = bulletSchema;
