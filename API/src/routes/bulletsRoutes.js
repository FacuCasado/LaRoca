const { Router } = require('express');
const bulletsControllers = require('../controllers/bulletsControllers');
const rawValidation = require('../middlewares/rawValidation');
const stockValidation = require('../middlewares/stockValidation');

const router = Router();

router.get('/all', bulletsControllers.getAll);
router.get('/:month', rawValidation.month, bulletsControllers.getByMonth);
router.post(
	'/newentry',
	stockValidation.negativeStock,
	bulletsControllers.postBullets
);

module.exports = router;
