const mongoose = require('mongoose');
const server = require('./src/server');
// eslint-disable-next-line no-undef
const { PORT, MONGO_URI } = process.env;

mongoose
	.connect(MONGO_URI)

	// eslint-disable-next-line no-unused-vars
	.then((res) => console.log('Welcome to Mongo!'))
	.catch((error) => console.log(`Mongo error:${error}`));

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
