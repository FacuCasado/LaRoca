const { Stock } = require('../store');

module.exports = {
	getRaw: async () => {
		const nameRegex = new RegExp('raw', 'i');
		const rawStock = await Stock.find({ name: nameRegex });
		return rawStock;
	},
};
