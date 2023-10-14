const { Schema } = require('mongoose');

const stockSchema = new Schema(
	{
		name: {
			type: String,
			min: 0,
		},
		available: {
			type: Number,
			min: 0,
		},
	},
	{
		timestamps: true,
	}
);

stockSchema.set('versionKey', false);

module.exports = stockSchema;
