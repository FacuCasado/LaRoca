const { User } = require('../store');
const { ClientError, catchAsync } = require('../utils');
const Joi = require('joi');

module.exports = {
	createData: catchAsync(async (req, res, next) => {
		const bodyData = req.body;
		const validationSchema = Joi.object({
			name: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string().required(),
			cuit: Joi.string()
				.regex(/^\d{2}-\d{8}-\d$/)
				.required(),
		}).unknown(true);
		const validateData = validationSchema.validate(bodyData, {
			abortEarly: false,
		});
		if (validateData.error) {
			const message = validateData.error.details
				.map((err) => err.message)
				.join(', ');
			throw new ClientError(message, 401);
		} else {
			const duplicateUser = await User.findOne({ email: bodyData.email });
			if (duplicateUser) {
				throw new ClientError('Email ya registrado', 401);
			} else {
				next();
			}
		}
	}),
	loginData: (req, res, next) => {
		const loginData = req.body;
		if (!loginData.email || !loginData.password)
			throw new ClientError('Faltan datos', 401);
		else next();
	},
};
