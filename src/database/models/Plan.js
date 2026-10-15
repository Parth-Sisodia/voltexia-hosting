const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Plan', PlanSchema);
