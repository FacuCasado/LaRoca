const { Router } = require('express');
const userRoutes = require('./userRoutes');
const rawRoutes = require('./rawRoutes');
const bulletsRoutes = require('./bulletsRoutes');
const { Stock } = require('../store');

const router = Router();

router.use('/user', userRoutes);
router.use('/raw', rawRoutes);
router.use('/bullet', bulletsRoutes);

router.post('/newstock', async (req, res) => {
	const response = await Stock.create({ availableRaw: 0, availableBullets: 0 });
	res.status(201).json(response);
});

module.exports = router;
