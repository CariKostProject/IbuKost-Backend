const express = require('express');
const Route = express.Router();
const AuthController = require('../controllers/auth');

Route.get('/', (req, res) => {
	res.json({
		message: 'Welcome to IbuKost API',
		login: 'If you already have an account, please login',
		register: 'Register your account today to use IbuKost API'
	});
})
	.post('/register/user', AuthController.registerUser)
	.post('/login/user', AuthController.loginUser)
	.post('/register/partner', AuthController.registerPartner)
	.post('/login/partner', AuthController.loginPartner);

module.exports = Route;
