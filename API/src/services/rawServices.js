const { Raw, Stock } = require('../store');

module.exports = {
	newEntry: async (data) => {
		const newRaw = await Raw.create(data);
		console.log(newRaw);
		const stock = await Stock.updateMany(
			{ name: 'raw' },
			{
				$inc: { available: newRaw.amount },
			}
		);
		if (stock.modifiedCount === 0) {
			await Stock.create({
				name: 'raw',
				available: newRaw.amount,
			});
		}
		console.log(stock);
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
