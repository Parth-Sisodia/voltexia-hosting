const mongoose = require('mongoose');

const ServerLinkSchema = new mongoose.Schema({
  ownerInternalId: String,
  plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
  name: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ServerLink', ServerLinkSchema);
