var config = require('./webpack');

config.resolve.alias['react'] = 'preact-compat';
config.resolve.alias['react-dom'] = 'preact-compat';
config.resolve.alias['preact-compat'] = 'preact-compat/dist/preact-compat';

config.devServer.port = 3102;

module.exports = config;
