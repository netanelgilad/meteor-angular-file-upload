Package.describe({
  summary: "Angular File Upload is a module for the AngularJS framework",
  version: "0.0.2",
  git: "https://github.com/netanelgilad/meteor-angular-file-upload.git"
});

Package.on_use(function (api) {
  api.use('mquandalle:bower@0.1.11', 'client');
  api.use('urigo:angular@0.4.2', 'client');

  // Install bower components.
  api.addFiles('smart.json', 'client');

  // Client files.
  api.addFiles('init.js', 'client');
});