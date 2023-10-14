const { Stock } = require('../store');
const { catchAsync, ClientError } = require('../utils');

module.exports = {
	negativeStock: catchAsync(async (req, res, next) => {
		const { usedRaw } = req.body;
		const stock = await Stock.findOne({
			name: 'raw',
		});
		if (stock.available < usedRaw) {
			throw new ClientError('Stock negativo', 401);
		}
		next();
	}),
};
