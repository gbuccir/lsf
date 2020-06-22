var app = angular.module('app', ["login"]);
app.controller('appController', function ($scope) {
    $scope.isLogado = false;
    $scope.nome = "vamo ai!!!"
});