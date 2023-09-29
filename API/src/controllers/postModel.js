const { response } = require('../utils');
const store = require('../store');

module.exports = async (req, res) => {
	const { model } = req.params;
	const newEntry = req.body;

	const data = await store[model].create(newEntry);

	response(res, 201, data);
};
