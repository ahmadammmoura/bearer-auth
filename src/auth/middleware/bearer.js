
'use strict';

const User = require('../models/user')

module.exports = async (req, res, next) => {
  // req.headers.authorization: 'Bearer asdads.asdsad.sdsd'
  if (!req.headers.authorization) {
    next('missing auth headers!');
    return;
  }
  const headers = req.headers.authorization.split(' ');
  if (headers[0] !== 'Bearer') {
    next('invalid auth headers!');
    return;
  }
  try {
    const validUser = await User.authenticateWithToken(headers[1]);
    req.user = validUser;
    next();
  } catch (error) {
    res.status(403).json(error.massege)
  }
};