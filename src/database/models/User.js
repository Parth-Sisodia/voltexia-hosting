const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  discordId: { type: String, unique: true, required: true },
  username: String,
  email: String,
  avatar: String,
  accessToken: String,
  refreshToken: String,
  isOwner: { type: Boolean, default: false },
  cryptoAddress: { type: String, default: '' },
  internalId: { type: String, unique: true, required: true },
}, { timestamps: true });

UserSchema.pre('validate', function (next) {
  if (!this.internalId) this.internalId = `u_${Math.random().toString(36).substring(2, 10)}`;
  next();
});

module.exports = mongoose.model('User', UserSchema);
