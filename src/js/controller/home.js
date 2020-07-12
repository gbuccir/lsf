app.controller('appController', ["$scope", "$rootScope", "usuarioService", function ($scope,$rootScope, usuarioService) {
  appEnum($rootScope);
  $rootScope.isLogado = false;
}])