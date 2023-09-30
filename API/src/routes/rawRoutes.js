const { Router } = require('express');
const rawControllers = require('../controllers/rawControllers');
const rawValidation = require('../middlewares/rawValidation');

const router = Router();

router.get('/all', rawControllers.getAll);
router.get('/:month', rawValidation.month, rawControllers.getByMonth);
router.post('/newentry', rawValidation.createData, rawControllers.postRaw);

module.exports = router;
