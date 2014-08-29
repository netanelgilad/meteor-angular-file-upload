Package.describe({
  summary: "Angular File Upload is a module for the AngularJS framework",
  version: "0.0.3",
  git: "https://github.com/netanelgilad/meteor-angular-file-upload.git"
});

Package.on_use(function (api) {
  api.addFiles('angular-file-upload.min.js', 'client');
  api.addFiles('angular-file-upload.min.map', 'client');

  // Client files.
  api.addFiles('init.js', 'client');
});