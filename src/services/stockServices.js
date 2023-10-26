const { Stock } = require('../store');

module.exports = {
	getRaw: async () => {
		const rawStock = await Stock.find({ name: 'raw' });
		return rawStock;
	},
};
