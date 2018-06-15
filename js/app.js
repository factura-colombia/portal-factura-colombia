(function () {
  var app = angular.module("app", []);

  app.controller("mainController", function ($scope, $http, $location) {
    function init() {
      var subdomain = window.location.host.split('.')[0];
      var url = '/config/' + subdomain + '-config.json';
      $http.get(url).success(function (response) {
        $scope.config = response;
        
        var el = angular.element('.banner');
        el.addClass(response.backgroundClass);
      });
    }

    init();
  });
})();