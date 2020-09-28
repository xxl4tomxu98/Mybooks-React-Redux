const express = require('express');
const asyncHandler = require('express-async-handler');
//const { authenticated } = require('./security-utils');
const { User } = require('../../db/models');

const router = express.Router();

router.get('/',
    //authenticated,
    asyncHandler(async function (req, res, next) {
    const users = await User.findAll();
    res.json({ users });
}));

module.exports = router;
