/*eslint-disable*/
var defaults = {
  MONGOLAB_URI : 'mongodb://localhost:27017/iso-auth-boilerplate',
  clientDebug: '*,-socket.io-client*,-engine.io-client:*,-socket.io-parser*',
  serverDebug: '*,-babel,-express*,-socket.io*,-engine*,-connect*,-morgan,-Fluxible*,-send,-eslint*',
  PUBLIC_PATH: '/dist',
  PUBLIC_ASSET_DOMAIN: 'localhost:4000',
  WEBPACK_DEV_SERVER_PORT: 4002,
  DEVELOPMENT_PORT: 4040,
  BROWSERSYNC_PORT: 4000,
  BROWSER_RELOAD_TIMEOUT: 4000,
  HOSTNAME: 'localhost',
  PROTOCOL: 'http://',
  BABEL_STAGE: 0,
  NODE_ENV: 'development',
  DEBUG: '*,-babel,-express*,-socket.io*,-engine*,-connect*,-morgan,-Fluxible*,-send,-eslint*',
  JS_PATH: 'client.js',
  CSS_PATH: 'main.css',
  AWS_KEY : '',
  AWS_SECRET : '',
  AWS_BUCKET : ''

};

// For deployment


// Override defaults with environment variables
if (process && process.env) {
  Object.keys(defaults).map(function(key) {
    defaults[key] = process.env[key] || defaults[key]
  });
}

module.exports = defaults;
/*eslint-enable*/
