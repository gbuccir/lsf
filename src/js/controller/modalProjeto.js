
angular.module('modalProjeto', [])
    .component('modalProjeto', {
        templateUrl: '../../src/view/modalProjeto.html',
        bindings: {
            proj: "=",
            close: "&"
        },
        controller: ['$scope', '$rootScope', 'usuarioService', function aplicacao($scope, $rootScope, usuarioService) {
            var $ctrl = this;


            function init() {
                $('#modalProjeto').modal("show")
                console.log($ctrl)
            }


            $ctrl.fechar = function(){
                $ctrl.close();
            }

            init();


        }],
    })