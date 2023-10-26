const bcrypt = require('bcrypt');
const { User } = require('../store');

module.exports = {
	newUser: async (data) => {
		const hashedPassword = await bcrypt.hash(data.password, 10);

		const user = await User.create({ ...data, password: hashedPassword });

		// eslint-disable-next-line no-unused-vars
		const { password, ...newUser } = user._doc;

		return newUser;
	},
	validateUser: async (email, password) => {
		const user = await User.findOne({ email: email });
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (passwordMatch) return { passwordMatch, id: user._id };
		else return { passwordMatch };
	},
	getUserInfo: async (id) => {
		const authUser = await User.findById(id);
		// eslint-disable-next-line no-unused-vars
		const { password, ...user } = authUser._doc;
		return user;
	},
};
