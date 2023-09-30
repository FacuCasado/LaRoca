const bulletsServices = require('../services/bulletsServices');
const { catchAsync, response } = require('../utils');

module.exports = {
	postBullets: catchAsync(async (req, res) => {
		const bulletData = req.body;
		const newEntry = await bulletsServices.newEntry(bulletData);
		response(res, 201, newEntry);
	}),

	getAll: catchAsync(async (req, res) => {
		const allBullets = await bulletsServices.getAll();
		response(res, 200, allBullets);
	}),

	getByMonth: catchAsync(async (req, res) => {
		const { month } = req.params;
		const montBullets = await bulletsServices.getByMonth(month);
		response(res, 200, montBullets);
	}),
};
