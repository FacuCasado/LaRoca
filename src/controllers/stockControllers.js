const stockServices = require('../services/stockServices');
const { catchAsync, response } = require('../utils');

module.exports = {
	getRaw: catchAsync(async (req, res) => {
		const rawStock = await stockServices.getRaw();
		response(res, 200, rawStock);
	}),
};
