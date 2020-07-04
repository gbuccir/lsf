var app = angular.module('app', ["ngRoute","login"]);
app.controller('appController', function ($scope) {
    $scope.isLogado = false;
    $scope.nome = "vamo ai!!!"

    
})
.config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
      .when('/', {
          templateUrl: './src/view/home.html'
        })
        .when('/seila', {
          template: '<p>nova rota<p>'
        })
        .otherwise('naoEncontrada.html');
    }
  ]);