const express = require('express');
const router = express.Router();
const { register, login } = require('../controller/authentication');
// const { schemas, middlewareValidation } = require('../middleware/validate');
// const { auth } = require('../middleware/auth');


router.post("/register", register);
router.post("/login", login);


module.exports = router;