angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link) {
    var linkObj = {url: link};
    Links.addOne(linkObj);
  };
});
