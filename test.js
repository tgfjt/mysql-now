const tape = require('tape');

const now = require('./');

tape('should formatted', function(t) {
  const d = new Date(Date.UTC(2017, 5, 14, 9));

  t.equal(now(d), '2017-06-14 09:00:00', 'result was OK');
  t.end();
});
