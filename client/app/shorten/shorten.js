angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.checkUrl = function(link) {
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    if (link.match(rValidUrl)) {
      $scope.addLink(link);
      $scope.checkMe = '';
      $scope.message = '';
    } else {
      $scope.message = 'Invalid URL';
    }
  };
  $scope.addLink = function(link) {
    var linkObj = {url: link};
    Links.addOne(linkObj);
  };
  $scope.signout = function() {
    return Auth.signout();
  };
  if (Auth.isAuth()) {
    $location.path('/shorten');
  } else {
    $location.path('/signin');
  }
});
