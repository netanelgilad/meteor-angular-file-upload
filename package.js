Package.describe({
  summary: "Angular File Upload is a module for the AngularJS framework",
  version: "1.1.5",
  name: 'netanelgilad:angular-file-upload',
  git: "https://github.com/netanelgilad/meteor-angular-file-upload.git"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('angular:angular@1.2.11', 'client');

  // Load angular-file-upload lib.
  api.addFiles('angular-file-upload.js', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');

  api.use('netanelgilad:angular-file-upload');

  api.addFiles('netanelgilad:angular-file-upload-tests.js', 'client');
});
