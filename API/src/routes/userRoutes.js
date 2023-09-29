const { Router } = require('express');
const usersControllers = require('../controllers/usersControllers');
const userValidation = require('../middlewares/userValidation');

const router = Router();

router.post('/login', userValidation.loginData, usersControllers.login);
router.post('/create', userValidation.createData, usersControllers.postUser);

module.exports = router;
