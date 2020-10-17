
angular.module('modalProjeto', [])
.component('modalProjeto', {
    templateUrl: '../../src/view/modalProjeto.html',
    bindings: {

    },
    controller: ['$scope', '$rootScope', 'usuarioService', function aplicacao($scope, $rootScope, usuarioService) {
        var $ctrl = this;
        
        
        function init() {
        $('#modalProjeto').modal("show")
        }


        init();


    }],
})