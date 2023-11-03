const { Raw, Stock } = require('../store');

module.exports = {
	newEntry: async (data) => {
		const newRaw = await Raw.create(data);
		const stock = await Stock.updateMany(
			{ name: data.name },
			{
				$inc: { available: newRaw.amount },
			}
		);
		if (stock.modifiedCount === 0) {
			await Stock.create({
				name: data.name,
				available: newRaw.amount,
			});
		}
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
