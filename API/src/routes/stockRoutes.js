const { Router } = require('express');
const stockControllers = require('../controllers/stockControllers');

const router = Router();

router.get('/raw', stockControllers.getRaw);

module.exports = router;
