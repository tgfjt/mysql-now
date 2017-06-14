function twoDigits(d) {
  if (d >= 0 && d < 10) return '0' + d.toString();
  if (d > -10 && d < 0) return '-0' + (-1 * d).toString();
  return d.toString();
}

function now(d) {
  d = d || new Date();
  return (
    d.getUTCFullYear() +
    '-' +
    twoDigits(1 + d.getUTCMonth()) +
    '-' +
    twoDigits(d.getUTCDate()) +
    ' ' +
    twoDigits(d.getUTCHours()) +
    ':' +
    twoDigits(d.getUTCMinutes()) +
    ':' +
    twoDigits(d.getUTCSeconds())
  );
}

module.exports = now;
