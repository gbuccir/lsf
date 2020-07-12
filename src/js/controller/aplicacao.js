
angular.module('aplicacao', [])
    .component('aplicacao', {
        templateUrl: '../../src/view/aplicacao.html',
        bindings: {

        },
        controller: ['$scope', '$rootScope', 'usuarioService', function aplicacao($scope, $rootScope, usuarioService) {
            var $ctrl = this;
            $ctrl.projetosAux = [];
            $ctrl.userPerfil = usuarioService.getUser().perfil
            $ctrl.projetos = [
                {
                    nome: "nome do peojeto",
                    datacriacao: "dd/mm/aaaa",
                    concluido: 2
                },
                {
                    nome: "peojeto 2",
                    datacriacao: "dd/mm/aaaa",
                    concluido: 1
                },
                {
                    nome: "peojeto 3",
                    datacriacao: "dd/mm/aaaa",
                    concluido: 2
                },
            ]


            $ctrl.filtrarPorStatus = function (status) {
                $ctrl.projetos = $ctrl.projetosAux.filter(n => n.concluido == status);
            }

            function init() {
                angular.copy($ctrl.projetos, $ctrl.projetosAux)
                if ($ctrl.userPerfil == $rootScope.TipoUsuarioEnum.Projetista){
                    $ctrl.filtrarPorStatus($rootScope.StatusProjetoEnum.Concluido)
                   $ctrl.btnText= "Editar";
                }
                else{
                    $ctrl.filtrarPorStatus($rootScope.StatusProjetoEnum.NaoConcluido)
                    $ctrl.btnText= "Visualizar";
                }
            }

            $ctrl.abrirProjeto = function(projeto){
                console.log(projeto)
            }

            init();


        }],
    })