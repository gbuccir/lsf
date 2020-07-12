
angular.module('login', [])
    .component('login', {
        templateUrl: '../../src/view/login.html',
        bindings: {

        },
        controller: ['$scope', '$rootScope', 'usuarioService', function login($scope, $rootScope, usuarioService) {
            var $ctrl = this;
            $ctrl.login = "asd";
            $ctrl.senha = "asd";
            $ctrl.logar = logar;

            function logar() {
                if (!$ctrl.login)
                    return
                if (!$ctrl.senha)
                    return
                $rootScope.isLogado = true;

                let user = { perfil: 1 }
                usuarioService.setUser(user)
            }

        }],
    })