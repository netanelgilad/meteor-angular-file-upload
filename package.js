Package.describe({
  summary: "Angular File Upload is a module for the AngularJS framework",
  version: "0.0.1",
  git: "https://github.com/netanelgilad/meteor-angular-file-upload.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('urigo:ngmeteor@0.2.0', 'client');

  api.addFiles('angular-file-upload.min.js', 'client');
  api.addFiles('angular-file-upload.min.map', 'client');

  // Client files.
  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:angular-file-upload');
  api.addFiles('netanelgilad:angular-file-upload-tests.js');
});
