const { Bullet, Stock } = require('../store');

module.exports = {
	newEntry: async (data) => {
		const { usedRaw, ...bulletData } = data;
		const newBullet = await Bullet.create(bulletData);
		const stock = await Stock.updateMany(
			{},
			{
				$inc: { availableBullets: bulletData.amount, availableRaw: -usedRaw },
			}
		);
		console.log(stock);
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
