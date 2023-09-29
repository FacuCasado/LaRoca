const { Schema } = require('mongoose');

const salesSchema = new Schema(
	{
		bulletAmount: {
			type: Number,
			require: true,
		},
		transactionAmount: {
			type: Number,
			require: true,
		},
		confirm: {
			type: Boolean,
			default: true,
		},
		dispatched: {
			type: Boolean,
			default: false,
		},
		voucher: {
			type: String,
			default: null,
		},
	},

	{
		timestamps: true,
	}
);
salesSchema.set('versionKey', false);
module.export = salesSchema;
