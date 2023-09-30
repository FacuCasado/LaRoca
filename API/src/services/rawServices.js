const { Raw } = require('../store');

module.exports = {
	newEntry: async (data) => {
		const newRaw = await Raw.create(data);
		return newRaw;
	},

	getAll: async () => {
		const allRaw = await Raw.find();
		return allRaw;
	},

	getByMonth: async (month) => {
		const monthRaw = await Raw.find({
			$expr: {
				$eq: [{ $month: '$createdAt' }, month],
			},
		});
		return monthRaw;
	},
};
