const router = require('express').Router();
const {registerUser, authUser} = require('../controllers/userController');

//Chaining method, we can chain more methods in it
router.route('/').post(registerUser);

//normal, we can,t chain here
router.post('/login',authUser);

// userRoutes & authUser is controller, which is nothing but a js function.

module.exports = router;

