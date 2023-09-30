const { Schema } = require('mongoose');

const stockSchema = new Schema(
	{
		availableRaw: {
			type: Number,
		},
		availableBullets: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = stockSchema;
