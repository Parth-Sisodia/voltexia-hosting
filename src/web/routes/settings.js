const express = require('express');
const router = express.Router();
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
};

const User = require('../database/models/User');
const ServerLink = require('../database/models/ServerLink');

router.get('/', (req, res) => res.redirect('/'));

router.get('/', (req, res) => res.redirect('/'));

router.get('/settings', ensureAuthenticated, async (req, res) => {
  const user = await User.findById(req.user._id).lean();
  const servers = await ServerLink.find({ ownerInternalId: user.internalId }).lean();
  res.render('settings', { user, servers });
});

router.post('/settings', ensureAuthenticated, async (req, res) => {
  const { username, cryptoAddress } = req.body;
  await User.findByIdAndUpdate(req.user._id, { username, cryptoAddress });
  res.redirect('/settings');
});

module.exports = router;
