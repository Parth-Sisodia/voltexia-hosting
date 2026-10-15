const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
  amount: Number,
  currency: String,
  method: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Billing', BillingSchema);
