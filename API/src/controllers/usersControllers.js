const usersServices = require('../services/usersServices');
const { response, catchAsync, ClientError } = require('../utils');

module.exports = {
	postUser: catchAsync(async (req, res) => {
		const newData = req.body;

		const newUser = await usersServices.newUser(newData);

		response(res, 201, newUser);
	}),

	login: catchAsync(async (req, res) => {
		const { email, password } = req.body;

		const validatePassword = await usersServices.validateUser(email, password);

		if (validatePassword.passwordMatch) {
			const authUser = await usersServices.getUserInfo(validatePassword.id);

			response(res, 200, authUser);
		} else {
			throw new ClientError('Contraseña erronea', 401);
		}
	}),
};
