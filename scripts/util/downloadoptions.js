var proxy = require('./proxy'),
  auth = require('./auth'),
  userAgent = require('./useragent');

/**
 * The options passed to request when downloading the bibary
 *
 * There some nuance to how request handles options. Specifically
 * we've been caught by their usage of `hasOwnProperty` rather than
 * falsey checks. By moving the options generation into a util helper
 * we can test for regressions.
 *
 * @return {Object} an options object for request
 * @api private
 */
module.exports = function() {
  var options = {
    rejectUnauthorized: false,
    timeout: 60000,
    headers: {
      'User-Agent': userAgent()
    }
  };

  var proxyConfig = proxy();
  if (proxyConfig) {
    options.proxy = proxyConfig;
  }

  var authParams = auth();
  if (authParams) {
    options.auth = authParams;
  }

  return options;
};
