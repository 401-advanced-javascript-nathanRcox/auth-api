'use strict';

const base64 = require('base-64');
const User = require('../models/users.js');

module.exports = async (req, res, next) => {
  try {
    console.log('req.headers.authorization:', req.headers.authorization);
    if (!req.headers.authorization) { return _authError(); }
    let basic = req.headers.authorization.split(' ').pop();
    console.log({basic});
    let [user, pass] = base64.decode(basic).split(':');
    console.log({user}, {pass});
      req.user = await User.authenticateBasic(user, pass)
      console.log('Req.user:', req.user);
      next();
    } catch (e) {
      _authError()
    }

  function _authError() {
    res.status(403).send('Invalid Login, my friend');
  }
}
