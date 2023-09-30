const { Router } = require('express');
const userRoutes = require('./userRoutes');
const rawRoutes = require('./rawRoutes');

const router = Router();

router.use('/user', userRoutes);
router.use('/raw', rawRoutes);

module.exports = router;
