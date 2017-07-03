/**
 * Usage:
 *
 * ```
 * res.emailAddressInUse();
 * ```
 *
 */

module.exports = function nameInUse (){

  // Get access to `res`
  // (since the arguments are up to us)
  var res = this.res;

  return res.send(409, 'Identifier is already taken by another database item.');
};
