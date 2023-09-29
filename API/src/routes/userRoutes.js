const { Router } = require('express');
const usersControllers = require('../controllers/usersControllers');

const router = Router();

router.post('/login', usersControllers.login);
router.post('/create', usersControllers.postUser);

module.exports = router;
