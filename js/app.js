(function () {
  var app = angular.module("app", []);

  app.controller("mainController", function ($scope, $http, $location) {
    function init() {
      var subdomain = window.location.host.split('.')[0];
      $('body').addClass(subdomain);
      var url = '/config/' + subdomain + '-config.json';
      $http.get(url).success(function (response) {
        $scope.config = response;

        var el = angular.element('.banner');
        el.css({
          'background-image': 'url(' + response.backgroundUrl + ')'
        });
      });
    }

    init();
  });
})();