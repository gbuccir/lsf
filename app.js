var app = angular.module('app', ["ngRoute", "login", "aplicacao", "usuarioService"]);
app.controller('appController', function ($scope,$rootScope) {
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