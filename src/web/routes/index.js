const express = require('express');
const router = express.Router();
const Plan = require('../database/models/Plan');

// Home page
router.get('/', async (req, res) => {
  const featured = await Plan.findOne({ featured: true }).lean();
  res.render('index', { featured });
});

// Purchase endpoint
router.post('/purchase/:planId', async (req, res) => {
  if (!req.user) return res.status(401).send('Login required');
  const planId = req.params.planId;
  const PlanModel = require('../database/models/Plan');
  const ServerLink = require('../database/models/ServerLink');
  const Billing = require('../database/models/Billing');

  const plan = await PlanModel.findById(planId).lean();
  if (!plan) return res.status(404).send('Plan not found');

  const billing = new Billing({ user: req.user._id, plan: planId, amount: plan.price, currency: 'USDT', method: 'crypto' });
  await billing.save();

  const server = new ServerLink({ ownerInternalId: req.user.internalId, plan: planId, name: `${req.user.username}-server-${Date.now()}` });
  await server.save();

  res.redirect('/settings');
});

module.exports = router;
