Package.describe({
  name: 'timkinnane:rocketchat-bot-methods',
  version: '0.0.1',
  summary: 'Add some methods to Rocket.Chat for bots to use.',
  git: ''
})

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  // api.versionsFrom('1.3'); // when release
  api.use('ecmascript');
  api.use('underscore');
  api.use('rocketchat:lib');
	api.use('accounts-base');
  // api.mainModule('server/index.js', 'server'); // when 1.3
  // api.mainModule('client/index.js', 'client'); // when 1.3
  api.addFiles('server/index.js', 'server');
  api.addFiles('client/index.js', 'client');
});

// no tests for now sorry
Package.onTest(function(api) {
  // api.use('ecmascript');
  // api.use('tinytest');
  // api.use('timkinnane:rocketchat-bot-methods');
  // api.mainModule('rocketchat-bot-methods-tests.js');
});
