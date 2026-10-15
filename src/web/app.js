const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');
const settingsRoutes = require('./routes/settings');
const ownerRoutes = require('./routes/owner');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err));

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));

// Passport
require('./passport');
app.use(passport.initialize());
app.use(passport.session());

// Make user available in views
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/settings', settingsRoutes);
app.use('/owner', ownerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Optionally start the bot when running server in production/dev for convenience
try {
  require('../../src/bot/bot');
} catch (e) {
  // Bot can be started separately
}
