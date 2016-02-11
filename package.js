Package.describe({
  name: 'zodiase:function-bind',
  version: '0.0.1',
  summary: 'Apply polyfill for Function.prototype.bind.',
  git: 'https://github.com/Zodiase/meteor-function-bind.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('function-bind.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('zodiase:function-bind');
  api.addFiles('function-bind-tests.js');
});
