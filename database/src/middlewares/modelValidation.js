const store = require('../store');
const { DatabaseError } = require('../utils');

module.exports = (req, res, next) => {
	const { model } = req.params;
	/* eslint-disable no-prototype-builtins */
	if (store.hasOwnProperty(model)) {
		return next();
	} else {
		throw new DatabaseError('Model invalido', 401);
	}
};
