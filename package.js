Package.describe({
  summary: "Angular File Upload is a module for the AngularJS framework"
});

function packageExists(pkgname) {
  var fs = Npm.require('fs');
  var path = Npm.require('path');
  var pkgpath = path.join('packages', pkgname);
  return fs.existsSync(pkgpath);
}

Package.on_use(function (api) {
  api.use('bower', 'client');

  if (packageExists('angularite')) {
    api.use('angularite', 'client');
  } else if (packageExists('ngMeteor')) {
    api.use('ngMeteor', 'client');
  }

  // Install bower components.
  api.add_files('smart.json', 'client');

  // Client files.
  api.add_files('init.js', 'client');
});