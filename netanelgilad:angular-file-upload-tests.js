
Tinytest.add('Load dependencies', function (test) {
  test.isNotNull(angular, 'Angular exists as global variable');
  test.isNotNull(angular.module('angular-meteor'), 'angular-meteor exists');
  test.isNotNull(angular.module('angularFileUpload', 'angularFileUpload exists'));
});
