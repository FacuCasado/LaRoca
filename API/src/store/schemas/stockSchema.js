const { Schema } = require('mongoose');
const { ClientError } = require('../../utils');

const stockSchema = new Schema(
	{
		availableRaw: {
			type: Number,
			min: 0,
		},
		availableBullets: {
			type: Number,
			min: 0,
		},
	},
	{
		timestamps: true,
	}
);

stockSchema.set('versionKey', false);

stockSchema.pre('save', function (next) {
	if (this.availableBullets < 0 || this.availableRaw < 0) {
		const error = new ClientError('No puede haber stock negativo', 401);
		next(error);
	} else {
		next();
	}
});

module.exports = stockSchema;
