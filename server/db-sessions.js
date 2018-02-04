const db = require('./db.js');

const sessionSchema = mongoose.Schema({
  user_id: Number,
  createdAt: Date,
  duration: Number,
  focusTimestamps: Array,
  maxFocus: Number
});

const Session = mongoose.model('Session', sessionSchema);

const createSession = (newSession) => {
  const { user_id, duration, focusTimestamps, maxFocus } = newSession;

  const session = new Session({
    user_id: user_id,
    duration: duration,
    createdAt: new Date(),
    focusTimestamps: focusTimestamps,
    maxFocus: maxFocus
  });

  session.save((err, user) => {
    err && console.error(err);
    session && console.log(session.duration);
    cb(session);
  });
};