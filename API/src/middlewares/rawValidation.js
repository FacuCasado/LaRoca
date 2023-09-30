const { ClientError } = require('../utils');

module.exports = {
	createData: (req, res, next) => {
		const { amount } = req.body;
		if (amount) return next();
		else throw new ClientError('Falta la cantidad', 401);
	},
	month: (req, res, next) => {
		const regex = /^(1[0-2]|[1-9])$/;
		const { month } = req.params;
		if (regex.test(month)) return next();
		else throw new ClientError('El mes no es valido', 401);
	},
};
