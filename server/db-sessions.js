const Session = require('./db.js').Session;

module.exports = {
  createSession: (newSession, cb) => {
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
  }
};