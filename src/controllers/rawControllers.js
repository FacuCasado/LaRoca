const { response, catchAsync } = require('../utils');
const rawServices = require('../services/rawServices');

module.exports = {
	postRaw: catchAsync(async (req, res) => {
		const rawData = req.body;
		const newRaw = await rawServices.newEntry(rawData);
		response(res, 201, newRaw);
	}),
	getAll: catchAsync(async (req, res) => {
		const allRaw = await rawServices.getAll();
		response(res, 200, allRaw);
	}),
	getByMonth: catchAsync(async (req, res) => {
		const { month } = req.params;
		const monthRaw = await rawServices.getByMonth(month);
		response(res, 200, monthRaw);
	}),
};
