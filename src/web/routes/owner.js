const express = require('express');
const router = express.Router();
const Plan = require('../database/models/Plan');
const User = require('../database/models/User');
const Billing = require('../database/models/Billing');

const ensureOwner = async (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect('/');
  const u = await User.findById(req.user._id).lean();
  if (!u || !u.isOwner) return res.status(403).send('Forbidden');
  next();
};

router.get('/', ensureOwner, async (req, res) => {
  const plans = await Plan.find().lean();
  const users = await User.find().lean();
  const billings = await Billing.find().populate('user').lean();
  res.render('owner', { plans, users, billings });
});

router.post('/plan/feature/:id', ensureOwner, async (req, res) => {
  const id = req.params.id;
  await Plan.updateMany({}, { $set: { featured: false } });
  await Plan.findByIdAndUpdate(id, { featured: true });
  res.redirect('/owner');
});

router.post('/plan/edit/:id', ensureOwner, async (req, res) => {
  const { name, price, description } = req.body;
  await Plan.findByIdAndUpdate(req.params.id, { name, price, description });
  res.redirect('/owner');
});

module.exports = router;
