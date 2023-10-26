const { Schema } = require('mongoose');

const rawSchema = new Schema(
	{
		amount: {
			type: Number,
			require: true,
		},

		measurement: {
			type: String,
			require: true,
			default: 'Kg',
		},
	},
	{
		timestamps: true,
	}
);
rawSchema.set('versionKey', false);
module.exports = rawSchema;
