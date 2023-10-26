const { Bullet, Stock } = require('../store');

module.exports = {
	newEntry: async (data) => {
		const { usedRaw, ...bulletData } = data;
		const newBullet = await Bullet.create(bulletData);

		const bulletStock = await Stock.updateMany(
			{ name: bulletData.name },
			{
				$inc: { available: bulletData.amount },
			}
		);
		await Stock.updateMany(
			{ name: 'raw' },
			{
				$inc: { available: -usedRaw },
			}
		);
		if (bulletStock.modifiedCount === 0) {
			await Stock.create({
				name: bulletData.name,
				available: bulletData.amount,
			});
		}
		return newBullet;
	},

	getAll: async () => {
		const allBullets = await Bullet.find();
		return allBullets;
	},

	getByMonth: async (month) => {
		const monthBullets = await Bullet.find({
			$expr: {
				$eq: [{ $month: '$createdAt' }, month],
			},
		});
		return monthBullets;
	},
};
