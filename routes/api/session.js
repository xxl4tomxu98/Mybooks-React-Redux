const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const UserRepository = require('../../db/user-repository');
const { authenticated, generateToken } = require('./security-utils');

const router = express.Router();

const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');

router.put('/', [email, password], asyncHandler(async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }
  const { email, password } = req.body;

  const user = await UserRepository.findByEmail(email);

  if (!user.isValidPassword(password)) {
    const err = new Error('Login failed');
    err.status = 401;
    err.title = 'Login failed';
    err.errors = ['Invalid credentials'];
    return next(err);
  }

  const { jti, token } = generateToken(user);

  user.tokenId = jti;
  await user.save();
  res.cookie('token', token);
  res.json({ token, user: user.toSafeObject() });
}));

router.delete('/', [authenticated], asyncHandler(async (req, res) => {
  req.user.tokenId = null;
  await req.user.save();
  res.clearCookie('token');
  res.json({ message: 'success' });
}));

module.exports = router;
