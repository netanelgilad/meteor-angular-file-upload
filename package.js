Package.describe({
  summary: "Angular File Upload is a module for the AngularJS framework",
  version: "0.0.5",
  name: 'netanelgilad:angular-file-upload',
  git: "https://github.com/netanelgilad/meteor-angular-file-upload.git"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('urigo:angular@0.7.2', 'client');

  // Load angular-file-upload lib.
  api.addFiles('lib/bower_components/angular-file-upload/angular-file-upload.min.js', 'client');

  // Support for old versions of angular-meteor
  api.addFiles('init.js', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');

  api.use('netanelgilad:angular-file-upload');

  api.addFiles('netanelgilad:angular-file-upload-tests.js', 'client');
});
